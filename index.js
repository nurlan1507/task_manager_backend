const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const {PORT} = require("./config/settings")
const {DB} = require("./config/database")
const errorMiddleware = require("./middlewares/errorMiddleware")
const cors = require("cors")
//routes
const userRoutes = require("./routes/userRoute")

app.use(cors({origin:"*",}))
app.use(express.json({limit:'10mb'}))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
})
app.use("/api/users", userRoutes)
app.use(errorMiddleware)//error handlnbing

app.listen(PORT, () => {
  try{
    DB.initConnection()
    console.log('Server started on port 3000');
  }catch(e){
    process.exit(1)
  }
});