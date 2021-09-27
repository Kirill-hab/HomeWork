const apiError = require("../exceptions/api-error")
const tokenServes = require("../service/token-service")

module.exports = function (req, res, next) {
    try {
        const authorization = req.headers.authorization;
        if(!authorization) {
            return next(apiError.UnauthorizedError())
        }

        const accessToken = authorization.split(" ")[1];
        if(!accessToken) {
            return next(apiError.UnauthorizedError());
        }

        const userData = tokenServes.validatorAccessToken(accessToken);
        if(!userData) {
            return next(apiError.UnauthorizedError());
        }

        req.user = userData;
        next();
    } catch (e) {
        return next(apiError.UnauthorizedError());
    }
}