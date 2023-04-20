const { DataTypes,Model } = require('sequelize')

class TokenModel extends Model{}

module.exports = (sequelize)=>
    TokenModel.init({
        userId:{
            field:"user_id",
            type:DataTypes.STRING
        },
        refreshToken:{
            field:"refresh_token",
            type:DataTypes.STRING,
            allowNull:false
        },
    },{
        sequelize,
        timestamps:false,
        modelName:"tokens",
        
    })
