const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const {PORT} = require("./config/settings")
const {DB} = require("./config/database")
const errorMiddleware = require("./middlewares/errorMiddleware")
//routes
const userRoutes = require("./routes/userRoute")

app.use(express.json({limit:'10mb'}))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
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