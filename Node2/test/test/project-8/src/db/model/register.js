const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const RegisterUserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},

    //default: false
    isActivated: {type: Boolean, default: true},
    activationLink: {type: String}
})

// RegisterUserSchema.pre('save', function (next) {
//     const user = this;
//
//     console.log(this, "SAVE THIS>>>>>>>>>>>>")
//     if (this.isModified('password') || this.isNew) {
//         bcrypt.genSalt(10, (saltError, salt) => {
//             if (saltError) {
//                 console.log("<<<<<<ERROR SALT")
//
//                 return next(saltError);
//             } else {
//                 bcrypt.hash(user.password, salt,  (hashError, hash) => {
//                     if (hashError) {
//                         console.log("ERROR HASH")
//
//                         return next(hashError);
//                     }
//                     user.password = hash;
//
//                     console.log("DONT ERROR: ", user)
//                     next();
//                 });
//             }
//         })
//     } else {
//         console.log("ELSE NEXT()")
//         return next();
//     }
// });

// RegisterUserSchema.methods.comparePassword = function (password, callback) {
//     bcrypt.compare(password, this.password, (error, isMatch) => {
//         if (error) {
//             callback(error);
//         } else {
//             callback(null, isMatch);
//         }
//     })
// }

module.exports = RegisterUserSchema