const {DataTypes,Model} = require("sequelize")
const {} = require("../config/database")
class UserProjectModel extends Model{

}

module.exports = (sequelize)=>UserProjectModel.init({
    projectId:{
        field:"projectId",
        references:{
            model:"projects",
            key:"project_id"
        }
    },
    userId:{
        field:"user_id",
        references:{
            model:"users",
            key:"id"
        }
    }
},{
    sequelize,
    modelName:"user_project",
})

