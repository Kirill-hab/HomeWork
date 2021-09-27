const mongoose = require("mongoose");
const RegisterUserSchema = require("./register")
const TokenSchema = require("./token")

const FilmSchema = new mongoose.Schema({
    name: {type: String, required: true},
    genre: {type: String, required: true},
    directors: {type: Array, required: true},
    actors: {type: Array, required: true},

    link: {type: Array, required: true},
    grade: {type: Number, required: true},
    studio: {type: String, required: true}
})

const PersonSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    age: {type: Number, required: true},
    position: {type: String, required: true}
});

const CountriesSchema = new mongoose.Schema({
    name: {type: String, required: true},
    code: {type: String, required: true, unique: true}
})

const StudioSchema = new mongoose.Schema({
    name: {type: String, required: true},
    code: {type: String, required: true},
    price: {type: String, required: true}
})

const MyFilmSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, required: true},
    films: {type: Array, default: []}
})


// const modelCountries = mongoose.model("Countries", CountriesSchema);
// const modelStudio = mongoose.model("Studio", StudioSchema);


const modelFilm = mongoose.model("Film", FilmSchema, "Films");
// const modelUser = mongoose.model("Person", PersonSchema, "Persons");


const modelRegisterUser = mongoose.model("RegisterUser", RegisterUserSchema, "RegisterUser");
const modelToken = mongoose.model("Tokens", TokenSchema, "Tokens")
const modelMyFilm = mongoose.model("MyFilms", MyFilmSchema, "MyFilms")


module.exports = {
    modelFilm,
    // modelUser,
    // modelCountries,
    // modelStudio,

    modelRegisterUser,
    modelToken,
    modelMyFilm,
};