const {DataTypes,Model} = require("sequelize")
const {} = require("../config/database")
class UserProjectModel extends Model{

}

module.exports = (sequelize)=>UserProjectModel.init({
    projectId:{
        field:"project_id",
        type:DataTypes.INTEGER,
        references:{
            model:"projects",
            key:"project_id"
        }
    },
    userId:{
        field:"user_id",
        type: DataTypes.STRING,
        references:{
            model:"users",
            key:"id"
        }
    }
},{
    sequelize,
    modelName:"user_project",
})

