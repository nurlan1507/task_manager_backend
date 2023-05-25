const { DB } = require("../config/database")

class TasksService {

    async createNewTasks(task) {

    }


    async changeDeadline(taskId, newDate) {
        try {
            const task = await DB.taskModel.findOne({ where: { taskId: taskId } })
            if (task == null) {
                return false
            } else {
                task.finishDate = newDate
                await task.save()
            }
            return true
        } catch (e) {
            return false
        }


    }
    async getTasks(id) {
        const tasks = await DB.taskModel.findAll({ where: { projectId: id } })
        return tasks
    }

    async createTask(title, description, finishDate, projectId) {
        const newTask = await DB.taskModel.create({
            title: title,
            description: description,
            finishDate: finishDate,
            projectId: projectId
        })
        return newTask
    }

    async firstTasks(userId) {
        try {
            const newProject = await DB.projectModel.create({
                title: "Входящие",
                userId: userId
            }, { attributes: ['project_id'] })
            await DB.taskModel.create({
                title: "Добро пожаловать в TaskManager",
                description: "Ознакомтесь с приложением",
                projectId: newProject.projectId
            })
            await DB.taskModel.create({
                title: "Создать свое первое задание",
                description: "Наав на кнопку плс вы можете фывыфвфыв",
                projectId: newProject.projectId
            })
        } catch (e) {

        }

    }
}

module.exports = new TasksService()