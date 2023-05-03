const {DataTypes,Model} = require("sequelize")
const {} = require("../config/database")
class ProjectModel extends Model{

}

module.exports = (sequelize)=>ProjectModel.init({
    projectId:{
        field:"project_id",
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        field:"title",
        type: DataTypes.STRING,
        allowNull:false
    },
    userId:{
        field:"user_id",
        type:DataTypes.STRING
    }
},{
    sequelize,
    modelName:"projects",
})

