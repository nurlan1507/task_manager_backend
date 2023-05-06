const taskService = require("../services/tasksService")

class TaskController{
    async getTasks(req,res,next){
        try{
            const id = req.params.projectId
            const tasks =await taskService.getTasks(id)
            return res.status(200).json({tasks:tasks})
        }catch(e){
            next(e)
        }
    }

    async createTask(req,res,next){
        try{
            const {title,description,finishDate,projectId} = req.body
            const newTask = await taskService.createTask(
                title,
                description,
                finishDate,
                projectId
            )
            return res.json({message:"task created successfully", task:{...newTask.dataValues}}).status(200)
        }catch(e){
            next(e)
        }
    }
}

module.exports = new TaskController()