const passport = require("../services/passportService")
const tokenService = require("../services/tokenService")
const userService = require("../services/userService")
const {AuthError,BadRequest} = require("../exceptions/apiError")
const userDTO = require("../dtos/UserDTO")

class UserController {
    async googleAuthorization(req, res, next) {
        try{
            const fullname = req.user.displayName
            const profileId = req.user.id
            const email = req.user.emails[0].value
            if(fullname == null || profileId == null || email == null){
                return next(BadRequest(400, "Google authorization:invalid credentials"))
            }
            await userService.createUser(profileId, fullname.split(" ")[0], fullname.split(" ")[1], email)
            const tokens = await tokenService.createTokens(new userDTO(profileId.toString(),fullname,email))
            return res.status(200).json({user:userDTO, token:tokens})
        }catch(e){
            next(e)
        }


        // try{
        //     passport.authenticate("google-id-token", async (err, info, user) => {
        //         if (!user) {
        //             console.log(info)
        //             return next(new AuthError(401, info.msg))
        //         }
        //         else if (err) {
        //             return next(new BadRequest(400, err))
        //         } else {
        //             req.logIn((user, error) => {
        //                 const newTokens = tokenService.createTokens(user)
        //             })
        //             return res.status(200).json({ user: user, tokens: { ...newTokens } })
        //         }
        //     })(req,res,next)
        // }catch(e){
        //     return next(e)
        // }
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
    async refresh(req, res, next) {
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