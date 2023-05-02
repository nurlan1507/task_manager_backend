const {DataTypes,Model} = require("sequelize")
const {} = require("../config/database")
class TaskModel extends Model{

}

module.exports = (sequelize)=>TaskModel.init({
    taskId:{
        field:"task_id",
        type:DataTypes.BIGINT,
        allowNull:false,
        primaryKey:true
    },
    title:{
        field:"title",
        type: DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING
    },
    finishDate:{
        field:"finish_date",
        type:DataTypes.BIGINT
    },
    projectId:{
        field:"project_id",
        type:DataTypes.STRING
    }
    
},{
    sequelize,
    modelName:"tasks",
})

