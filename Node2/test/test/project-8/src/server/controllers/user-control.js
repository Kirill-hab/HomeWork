const {modelRegisterUser} = require("../../db/model");
const userService = require("./service/user-service")
const {validationResult} = require("express-validator")
const apiErrors = require("./exceptions/api-error")

class UserControl {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return apiErrors.BadRequest("Ошибка валидации", errors.array())
            }

            const {username, email, password} = req.body;
            const data = await userService.registration(username, email, password);

            res.cookie('refreshToken', data.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true
            })

            return res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body;
            const data = await userService.login(email, password)

            res.cookie('refreshToken', data.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true
            })

            return res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies;

            await userService.logout(refreshToken);
            res.clearCookie("refreshToken");

            return res.status(200)
        } catch (e) {
            next(e)
        }
    }

    async activation(req, res, next) {
        try {
            const activationLink = req.params.link;
            await userService.activate(activationLink);

            return res.redirect(process.env.CLIENT_URL)
        } catch (e) {
            next(e)
        }
    }

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies;

            const data = await userService.refresh(refreshToken)

            res.cookie('refreshToken', data.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true
            })

            return res.json(data)
        } catch (e) {
            next(e)
        }
    }

    async getAllFilms(req, res, next) {
        try {
            return await res.send(userService.getAllFilms());
        } catch (e) {
            next(e);
        }
    }

    async mayFilms(req, res, next) {
        try {
            const {refreshToken} = req.cookies;

            const id = 1
            return await res.send(userService.getMayFilms(id))
        } catch (e) {

        }
    }
}

module.exports = new UserControl()