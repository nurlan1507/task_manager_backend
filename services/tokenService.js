const jwt = require("jsonwebtoken")
const {TOKEN_SECRET} = require("../config/settings")
const {DB} = require("../config/database");
const { refreshToken } = require("../controllers/userController");

class TokenService{
    async createTokens(userDto){
        const userdto = userDto;
        console.log({...userdto})
        const refreshToken = jwt.sign({...userdto}, TOKEN_SECRET, {expiresIn:'7d'});
        const accessToken = jwt.sign({...userdto},TOKEN_SECRET,{expiresIn: '1d'});
        this.saveToken(userDto.id,refreshToken)
        return {refreshToken:refreshToken, accessToken:accessToken}
    }

    async getToken(refreshToken){
        const token =  await DB.tokenModel.findOne({where:{refreshToken:refreshToken}, attributes:['id','user_id','refresh_token']})
        console.log(token)
        return token 
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
        const token = await DB.tokenModel.findOne({where:{userId:userId}})
        if(token!=null){
            token.refreshToken = refreshToken
            await token.save()
            return token
        }
        const DBToken = await DB.tokenModel.create({
            userId:userId,
            refreshToken: refreshToken,
        })
        return DBToken
    }


}


module.exports = new TokenService()