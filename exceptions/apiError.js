class ApiError{
    code
    msg
    constructor(code,msg){
        this.code = code
        this.msg = msg
    }
}

class AuthError extends ApiError{}

class BadRequest extends ApiError{}

module.exports = {
    ApiError,AuthError,BadRequest
}