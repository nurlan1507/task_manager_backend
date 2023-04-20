const {Router} = require("express")
const router = Router()
const passport = require("../services/passportService")

const userController = require("../controllers/userController")

const authMiddleware = require("../middlewares/authMiddleware")

router.post("/register", userController.register)
router.post("/login", userController.login)
router.post("/logout", userController.logout)
router.get("/refresh", userController.refreshToken)
router.get("/getMe",authMiddleware,(req,res)=>{res.json("getMe")})
router.post("/googleSignIn", userController.googleAuthorization)

module.exports = router
