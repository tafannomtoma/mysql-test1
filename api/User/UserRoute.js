
const controller = require("./UserController.js")

const router = require("express").Router()

router.post("/user", controller.createUserController)
router.put("/user/update", controller.updateUserController)
router.delete("/user/delete/:id", controller.deleteUserController)


module.exports = router