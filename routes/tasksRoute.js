const {Router} = require("express")
const router = Router()

const taskController = require("../controllers/taskController")

const authMiddleware = require("../middlewares/authMiddleware")


router.use(authMiddleware)

router.get("/getTasks/:projectId", taskController.getTasks)
router.post("/createTask",taskController.createTask )

module.exports = router
