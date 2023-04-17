const jwt = require("jsonwebtoken")
const userDTO = require("../dtos/UserDTO")
const {TOKEN_SECRET} = require("../config/settings")
const {tokenModel} = require("../config/database")

class TokenService{
    async createTokens(userDto){
        const userdto = userDto;
        const refreshToken = jwt.sign({...userdto}, TOKEN_SECRET, {expiresIn:'7d'});
        const accessToken = jwt.sign({...userdto},TOKEN_SECRET,{expiresIn: '1m'});
        this.saveToken(userDto.id,refreshToken)
        return {refreshToken:refreshToken, accessToken:accessToken}
    }

    async refreshToken(){

    }   

    verifyAccessToken(token) {
        try {
            return jwt.verify(
                token,
                TOKEN_SECRET
            );
        } catch (e) {
            return null;
        }
    }

    verifyRefreshToken(token) {
        try {
            return jwt.verify(
                token,
                TOKEN_SECRET
            );
        } catch (e) {
            return null;
        }
    }


    async saveToken(userId,refreshToken){
        const token = await tokenModel.findOne({where:{userId:userId}})
        if(token!=null){
            token.refreshToken = refreshToken
            await token.save()
            return token
        }
        const DBToken = await tokenModel.create({
            userId:user.id,
            refreshToken: refreshToken,
        })
        return DBToken
    }


}


module.exports = new TokenService()