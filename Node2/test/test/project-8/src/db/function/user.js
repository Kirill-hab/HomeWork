const {modelUser} = require("../model");

function listUsers() {
    return modelUser.find();
}

function getUser(id) {
    return modelUser.findOne({
        _id: id
    })
}

function upDateUser(id, data) {
    const user = modelUser.findById(id);

    return user.update(data);
}

function creatUser(data) {
    const user = new modelUser(data);

    return user.save();
}

function deleteUser(id) {
    return modelUser.deleteOne({
        _id: id
    })
}

module.exports = {
    listUsers,
    getUser,
    creatUser,
    upDateUser,
    deleteUser
}