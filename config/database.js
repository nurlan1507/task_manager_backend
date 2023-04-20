const Sequelize = require("sequelize")
const DB = Sequelize.Sequelize
const {DB_URL,DB_PASSWORD,DB_PORT,DB_USERNAME, DB_NAME } = require("./settings")
const userModelInit = require("../models/userModel")

class DataBase{
    sequelize
    userModel
    tokenModel
    async initConnection(){
        this.sequelize = new DB(DB_NAME, DB_USERNAME, DB_PASSWORD,{
            host:DB_URL,
            dialect:"postgres",
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            },
            logging:false
        })
        try {
            await this.sequelize.authenticate()
            await this.createEntities()
            this.sequelize.sync()
            console.log("Db connected susccessfully")
        } catch (e) {
            console.log(`Db error: ${e}`)
            throw e
        }
    }

    async createEntities(){
        try{
            this.userModel = userModelInit(this.sequelize)
            this.tokenModel = require("../models/tokenModel")(this.sequelize)
            this.userModel.hasOne(this.tokenModel)
            this.tokenModel.belongsTo(this.userModel,{foreignKey:"user_id"})
            await this.sequelize.sync()
        }catch(e){
            throw(e)
        }
    }

    async closeConnection(){
        try{
            this.sequelize.close()
            console.log("db connection closed")
        }catch(e){
            console.log("db connection close error:" + e)
            throw(e)
        }
    }
}



const db = new DataBase()
module.exports = {
    DB:db,
}