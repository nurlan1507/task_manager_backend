const {userModel} = require("../config/database")
const tokenService = require("../services/tokenService")

class UserService{
    async createUser(profileId, firstName, lastName, email){
        await userModel.create({
            id:profileId,
            firstName:firstName,
            lastName:lastName,
            email:email
        })
    }
}

module.exports = new UserService()