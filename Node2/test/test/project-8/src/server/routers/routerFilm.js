const {Router} = require("express");
const fn = require("../../db/function");

function createRoutesFilm() {
    const router = Router();

    router.get('/films', (req, res) => {
        fn.listFilms().then(data => res.send(data))
    });

    router.post('/film', (req, res) => {
        fn.creatFilm(req.body).then(data => res.send(data))
    });

    router.patch('/film/:id', (req, res) => {
        const { id } = req.params;
        fn.upDateFilm(id, req.body).then(data => res.send(data))
    });

    router.delete('/film/:id', (req, res) => {
        const {id} = req.params;
        fn.deleteFilm(id).then(data => res.send(data))
    });

    return router
}

module.exports = createRoutesFilm