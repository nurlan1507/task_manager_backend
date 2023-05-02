const {DataTypes,Model} = require("sequelize")
const {} = require("../config/database")
class ProjectModel extends Model{

}

module.exports = (sequelize)=>ProjectModel.init({
    projectId:{
        field:"project_id",
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true
    },
    title:{
        field:"title",
        type: DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize,
    modelName:"projects",
})

