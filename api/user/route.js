const express = require("express");
const router = express.Router();
const userController = require("./controller");
const { auth } = require("../../middleware/auth");

router.post("/sign-in", userController.signIn);
router.post("/sign-up", userController.signUp);
router.get("/users", userController.getUsers);
router.get("/user/:id", userController.getUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user", userController.deleteUser);

module.exports = router;
