const {DataTypes,Model} = require("sequelize")
const {} = require("../config/database")
class TaskModel extends Model{

}

module.exports = (sequelize)=>TaskModel.init({
    taskId:{
        field:"task_id",
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
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
    done:{
        type:DataTypes.BOOLEAN
    },
    projectId:{
        field:"project_id",
        type:DataTypes.INTEGER
    }
},{
    sequelize,
    timestamps:false,
    modelName:"tasks",
})

