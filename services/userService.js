const {DB} = require("../config/database")
const tokenService = require("../services/tokenService")

class UserService{
    async createUser(profileId, firstName, lastName, email){
        await DB.userModel.create({
            id:profileId,
            firstName:firstName,
            lastName:lastName,
            email:email
        })
    }

    async getUserById(id){

        const user = await DB.userModel.findOne({where:{id:id}})
        if(!user){
            return true
        }else{
            return false
        }
    }
}

module.exports = new UserService()