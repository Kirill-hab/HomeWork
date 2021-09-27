const {Router} = require("express");
const controlUser = require("../controllers/user-control")
const {body} = require("express-validator");
const authMiddleware = require("../controllers/middlewares/auth-middleware")

const router = new Router();

router.post('/registration',
    body("email").isEmail(), body("password").isLength({min: 4, max: 20}),
    controlUser.registration);

router.post('/login', controlUser.login)

router.post('/logout', controlUser.logout)

router.get('/activate/:link', controlUser.activation)

router.get('/refresh', controlUser.refresh)

router.get('/films', authMiddleware, controlUser.getAllFilms);

router.get('/mayFilms', authMiddleware, controlUser.mayFilms)
module.exports = router;