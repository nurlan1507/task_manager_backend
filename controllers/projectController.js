const projectService = require("../services/projectService")

class ProjectController{
    async createProject(req,res,next){
        try{
            const {title} = req.body
            const user = req.user
            await projectService.createProject(title,user.id)
            return res.status(200).json({"message":"Project was successfully created"})
        }catch(e){
            next(e)
        }
      
        
    }

    async getProject(req,res,next){
        try{
            const id = req.params.id
            const project = await projectService.getProject()
            if(project==null || project == undefined){
                return res.status(400,{message:"No project exists"})
            }
            return res.json({...project})
        }catch(e){
            next(e)
        }
    }

    async getProjects(req,res,next){
        try{
            const userId = req.user.id
            const projects = await projectService.getProjects(userId)
            if(projects.length==0){
                return res.status(400).json({message:"No projects"})
            }
            return res.status(200).json({projects:projects})
        }catch(e){
            next(e)
        }
    }

    async deleteProject(req,res,next){
        
    }



}

module.exports = new ProjectController()