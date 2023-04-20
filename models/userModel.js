const { DataTypes,Model } = require('sequelize')
const {} = require("../config/database")
class UserModel extends Model{

}

module.exports = (sequelize) => UserModel.init({
    id:{
        type:DataTypes.STRING,
        primaryKey:true,
    },
    firstName:{
        field:"first_name",
        type:DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        field:"last_name",
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        field:"email",
        type:DataTypes.STRING,
        allowNull:true
    },
},{
    sequelize,
    timestamps:true,
    modelName:"users"
})
