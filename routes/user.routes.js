const express = require("express")
const router = express.Router()
const { createUser,readUser,getUser,deleteUser,updateUser,updatedUser } = require("../controller/user.controller.js")

router.post("/", createUser)
router.get("/",readUser)
router.get("/:id",getUser)
router.delete("/:id",deleteUser)
router.put("/:id",updateUser)
router.patch("/:id",updatedUser)
module.exports = router
