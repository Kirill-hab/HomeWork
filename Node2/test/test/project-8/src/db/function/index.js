const {registration, login} = require("./register");
const {listFilms, upDateFilm, creatFilm, deleteFilm} = require("./film");
const {listUsers, getUser, creatUser, upDateUser, deleteUser} = require("./user");


module.exports = {
    registration,
    login,

    listFilms,
    upDateFilm,
    creatFilm,
    deleteFilm,

    listUsers,
    getUser,
    creatUser,
    upDateUser,
    deleteUser
}