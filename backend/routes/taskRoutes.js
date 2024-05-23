const express = require("express");
const { getTasks, createTask } = require("../controllers/taskController.js");

const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
//router.patch("/", updateTask);
//router.delete("/", deleteTask);

module.exports = router;
