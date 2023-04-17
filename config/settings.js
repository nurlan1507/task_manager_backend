require("dotenv").config()

//server
const PORT = process.env.PORT || 3000

//sequileze
const DB_URL = process.env.DB_HOST
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_PORT = process.env.DB_PORT || 5432
const DB_NAME = process.env.DB_NAME

//token creds
const TOKEN_SECRET = process.env.TOKEN_SECRET

//Google ids
const GOOGLE_CLIENT_ID = process.env.CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.CLIENT_SECRET

module.exports = {
    PORT,
    DB_URL,DB_PASSWORD,DB_PORT,DB_USERNAME, DB_NAME,
    TOKEN_SECRET,
    GOOGLE_CLIENT_SECRET,GOOGLE_CLIENT_ID
}