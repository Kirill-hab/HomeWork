const jwt = require("jsonwebtoken")
const {modelToken} = require("../../../db/model");

class TokenService {
    generationTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: "30m"});
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: "30d"});

        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await modelToken.findOne({user: userId});

        if (tokenData) {
            const newToken = await new modelToken({user: userId, refreshToken});
            modelToken.remove({user: userId})

            return newToken.save()
        }

        const token = await new modelToken({user: userId, refreshToken});
        return token.save();
    }

    validatorAccessToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_ACCESS_SECRET)
        } catch (e) {
            return null;
        }
    }

    validatorRefreshToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_REFRESH_SECRET)
        } catch (e) {
            return null;
        }
    }

    removeToken(refreshToken) {
        return modelToken.deleteOne({refreshToken});
    }

    findToken(refreshToken) {
        return modelToken.find({refreshToken});
    }
}

module.exports = new TokenService()