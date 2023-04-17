const {ApiError} = require("../exceptions/apiError")

function errorMiddleware(err,req,res,next){
    if(err instanceof ApiError){
        return res.status(err.code).json(err.msg)
    }
    else{
        return res.json(err)
    }   
}

module.exports = errorMiddleware