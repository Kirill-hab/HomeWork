const {modelFilm} = require("../model");

function listFilms() {
    return modelFilm.find();
}

function upDateFilm(id, data) {
    const film = modelFilm.findById(id);

    return film.update(data);
}

function creatFilm(data) {
    const film = new modelFilm(data);

    return film.save();
}

function deleteFilm(id) {
    return modelFilm.deleteOne({
        _id: id
    })
}

function getFilm(id) {
    return modelFilm.findOne({
        _id: id
    })
}

module.exports = {
    listFilms,
    upDateFilm,
    creatFilm,
    deleteFilm,

    getFilm
}