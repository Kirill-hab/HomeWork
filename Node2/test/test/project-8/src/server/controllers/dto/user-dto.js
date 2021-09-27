module.exports = class UserDto {
    username;
    email;
    id;
    isActivation;

    constructor(model) {
        console.log(model, "MODEL")
        this.username = model.username;
        this.email = model.email;
        this.id = model._id;
        this.isActivation = model.isActivation;
    }
}