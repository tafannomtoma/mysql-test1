
const controller = require("./UserController.js")

const router = require("express").Router()

router.post("/user", controller.createUserController)
router.put("/user/update", controller.updateUserController)


module.exports = router