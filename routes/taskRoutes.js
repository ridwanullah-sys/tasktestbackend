const express = require("express");
const {
  getTasks,
  getTask,
  createNewTask,
  updateTaskStatus,
  deleteTask,
} = require("../controllers/taskControllers");

const router = express.Router();

router.get("/", getTasks);
router.get("/:task_id", getTask);
router.post("/", createNewTask);
router.patch("/", updateTaskStatus);
router.delete("/", deleteTask);

module.exports = router;
