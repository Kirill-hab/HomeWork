const mongoose = require("mongoose");

function setUpConnection() {
    mongoose.connect(process.env.DATABASE_DB, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
}


/**
 function listCountries() {
    return modelFilm.find();
}
 function upDateCountries(id, data) {

}
 function creatCountries(data) {

}
 export function deleteCountries(id) {
   modelCountries.deleteOne({
       _id: id
   })
}
 */

/**
 function listStudios() {
    return modelFilm.find();
}
 function upDateStudio(id, data) {

}
 function creatStudio(data) {

}
 function deleteStudio(id) {

}
 */

module.exports = setUpConnection