const tokenService = require("../services/tokenService")
const userService = require("../services/userService")
const {AuthError, BadRequest} = require("../exceptions/apiError")

async function authMiddleware(req,res,next){
    const accessToken = req.headers.authorization
    try{
        const decoded = tokenService.verifyAccessToken(accessToken)
        if(decoded){
            const userId = decoded.id
            const user =await userService.getUserById(userId)
            if(!user){
                return next(new BadRequest(400, "user not found"))
            }
            next()
        }else{
            return next(new AuthError(401,"user unauthorized"))
        }
    }catch(e){
        return next(new AuthError(401,"user unauthorized"))
    }
}

module.exports = authMiddleware