const { use } = require("passport")
const {DB} = require("../config/database")

class TasksService{
     
    async createNewTasks(task){
    
    }


    async firstTasks(userId){
        try{
            const newProject = await DB.projectModel.create({
                title:"Входящие",
                userId:userId
            })
            await DB.taskModel.create({
                title:"Добро пожаловать в TaskManager",
                description:"Ознакомтесь с приложением",
                projectId:newProject.projetctId
            })
            await DB.taskModel.create({
                title:"Создать свое первое задание",
                description:"Наав на кнопку плс вы можете фывыфвфыв",
                projectId:newProject.projetctId
            })
        }catch(e){
            next(e)
        }
        
    }
}

module.exports = new TasksService()