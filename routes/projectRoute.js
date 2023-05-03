const {Router} = require("express")
const router = Router()

const projectController = require("../controllers/projectController")

const authMiddleware = require("../middlewares/authMiddleware")


router.post("/createProject", projectController.createProject)
router.get("/getProject/:id", projectController.getProject)
router.delete("/deleteProject", projectController.deleteProject)
router.get("/getInitationLink", (req,res)=>{}) 

module.exports = router
