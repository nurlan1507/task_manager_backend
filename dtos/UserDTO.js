class UserDto {
    id
    username
    email
    constructor(id,username,email) {
        this.id = id
        this.email = email
        this.username = username
    }
}

module.exports = UserDto