const { DataTypes,Model } = require('sequelize')

class TokenModel extends Model{}

module.exports = (sequelize)=>
    TokenModel.init({
        userId:{
            field:"user_id",
            type:DataTypes.INTEGER
        },
        refreshToken:{
            field:"refresh_token",
            type:DataTypes.STRING(64),
            allowNull:false
        },
    },{
        sequelize,
        timestamps:false
    })
