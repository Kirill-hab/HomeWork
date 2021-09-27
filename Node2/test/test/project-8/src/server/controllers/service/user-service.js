const uuid = require("uuid");
const bcrypt = require("bcrypt");

const {modelRegisterUser, modelFilm, modelMyFilm} = require("../../../db/model");

// const emailService = require("./email-service");
const tokenService = require("./token-service");

const apiError = require("../exceptions/api-error");

class UserService {
    async registration(username, email, password) {

        const candidate = await modelRegisterUser.findOne({email})

        if (candidate) {
            throw apiError.BadRequest("email уже используеться");
        }

        const hashPass = await bcrypt.hash(password, 10);
        const activationLink = uuid.v4();

        const user = new modelRegisterUser({username, email, password: hashPass, activationLink});

        /**
         НАДО ДОДЕЛАТЬ
         */
        // await emailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);

        const userDto = {
                username: user._doc.username,
                email: user._doc.email,
                id: user._doc._id,
                isActivated: user._doc.isActivated
            }

        const tokens = tokenService.generationTokens(userDto);
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        const myFilm = new modelMyFilm({id: userDto.id})

        //в кукит передовать айдишку пользователя
        myFilm.save().catch(console.error);

        user.save().catch(console.error);
        return {...tokens, user: userDto};
    }

    async activate(activationLink) {
        const user = await modelRegisterUser.findOne({activationLink})

        if (!user) {
            throw apiError.BadRequest("Проблема с ссылкой")
        }

        user.isActivated = true;
        await user.save()
    }

    async login(email, password) {
        const user = await modelRegisterUser.findOne({email});
        if (!user) {
            throw apiError.BadRequest("Email не найден");
        }

        const isPassword = await bcrypt.compare(password, user.password);
        if (!isPassword) {
            throw apiError.BadRequest("Неверный пароль");
        }

        const userDto = {
            username: user._doc.username,
            email: user._doc.email,
            id: user._doc._id,
            isActivated: user._doc.isActivated
        }
        const tokens = tokenService.generationTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto}
    }

    async logout(refreshToken) {
        return await tokenService.removeToken(refreshToken);
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw apiError.UnauthorizedError()
        }

        const userData = tokenService.validatorRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);

        if (!userData || !tokenFromDb) {
            throw apiError.UnauthorizedError()
        }

        const user = await modelRegisterUser.findById({_id: userData.user})

        const userDto = {
            username: user._doc.username,
            email: user._doc.email,
            id: user._doc._id,
            isActivated: user._doc.isActivated
        }
        const tokens = tokenService.generationTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto}
    }

    async getAllFilms() {
        const [allFilms] = await Promise.all([modelFilm.find()]);
        return allFilms;
    }

    async getMayFilms(userId) {
        const [myFilms] = await Promise.all([modelMyFilm.findOne({user: userId})])
        return myFilms;
    }

    async addFilm(filmId, userId) {
        const film = await modelFilm.findOne({_id: filmId});
        if (!film) {
            // throw apiError
        }

        const user = await modelMyFilm.findOne({user: userId});

        const f = film._doc, u = user._doc

        const idx = u.films.indexOf(f._id);
        if (idx !== -1) {

        }
        u.films.push(f._id);

        user.update(user).catch(console.error);
        return user;
    }
}

module.exports = new UserService()