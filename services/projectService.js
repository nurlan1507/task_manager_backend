const {DB} = require("../config/database")

class ProjectService{
    async getProject(id){
        const project = DB.projectModel.find({where:{projectId:id}})
        return project
    }

    async createProject(title,userId){
        await DB.projectModel.create({
            title:title,
            userId:userId
        })
    }

    async getProjects(id){
       const projects =  await DB.projectModel.findAll({where:{userId:id}})
       return projects
    }
}


module.exports = new ProjectService()