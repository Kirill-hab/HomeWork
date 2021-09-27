const mongoose = require("mongoose");

const TokenSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "RegisterUser"},
    refreshToken: {type: String, required: true}
})

module.exports = TokenSchema;