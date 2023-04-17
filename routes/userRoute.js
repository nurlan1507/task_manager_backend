const {Router} = require("express")
const router = Router()

const userController = require("../controllers/userController")

router.post("/register", userController.register)
router.post("/login", userController.login)
router.post("/logout", userController.logout)
router.get("/refresh", userController.refresh)
router.get("/getMe",(req,res)=>{res.json("getMe")})


module.exports = router
