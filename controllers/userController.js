const passport = require("../services/passportService")
const tokenService = require("../services/tokenService")
const userService = require("../services/userService")
const { AuthError, BadRequest } = require("../exceptions/apiError")
const UserDTO = require("../dtos/UserDTO")

class UserController {

    async googleAuthorization(req, res, next) {
        try {
            const id = req.body.id_token
            const username = req.body.username
            const email = req.body.email
            if(await userService.getUserById(id)){
                //then go create user
                await userService.createUser(id, username, username,email)
                const userDto = new UserDTO(id,username,email)
                const tokens = await tokenService.createTokens(userDto)
                return res.status(200).json({message:"User successfully created", data:{...userDto, ...tokens}})
            }else{
                const userDto = new UserDTO(id,username,email)
                const tokens = await tokenService.createTokens(userDto)
                return res.status(200).json({message:"User successfully logged in", data:{...userDto, ...tokens}})
            }
        } catch (e) {
            console.log(e);
            next(e)
        }
    }

    async refreshToken(req,res,next){
        try{    
            const refreshToken = req.headers.authorization
            const decoded = tokenService.verifyRefreshToken(refreshToken)
            if(decoded){
                const token = await tokenService.getToken(refreshToken)
                if(refreshToken && token){
                    var userdto = new UserDTO(decoded.id, decoded.username,decoded.email)
                    const tokens =await tokenService.createTokens(userdto)
                    return res.status(200).json({message:"tokens successfully refreshed", data:{...userdto,...tokens}})
                }
                else{
                    return res.status(401).json({message:"User session is expired, login again"})
                }
            }else{
                return res.status(401).json({message:"User session is expired, login again"})
            }
        }catch(e){
            next(e)
        }
    }



    async register(req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    }
    async login(req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    }
    async logout(req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    }

    async getMe(req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    }
}

module.exports = new UserController()