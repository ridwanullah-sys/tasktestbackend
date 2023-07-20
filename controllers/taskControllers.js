const taskModel = require("../models/taskModel");
const mongoose = require("mongoose");

const getTasks = async (req, res) => {
  try {
    const tasks = await taskModel.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

const getTask = async (req, res) => {
  const { task_id } = req.params;
  try {
    const tasks = await taskModel.findOne({ task_id });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

const createNewTask = async (req, res) => {
  const { title, description } = req.body;
  if (title == "" || title == undefined) {
    return res.status(400).json({ err: "Task title is required" });
  } else if (description == "" || description == undefined) {
    return res.status(400).json({ err: "Task description is required" });
  }

  try {
    const alltasks = await taskModel.find();
    const length = alltasks.length;
    let lastTask_id;
    if (length > 0) {
      lastTask_id = alltasks[length - 1].task_id;
    } else {
      lastTask_id = 0;
    }
    const task_id = lastTask_id + 1;
    console.log(task_id);
    const tasks = await taskModel.create({
      task_id,
      title,
      description,
      status: "pending",
    });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

const updateTaskStatus = async (req, res) => {
  const { task_id, status } = req.body;
  if (status != "pending" && status != "in progress" && status != "completed") {
    return res.status(400).json({ err: "invlid status value" });
  }
  try {
    const task = await taskModel.findOneAndUpdate({ task_id }, { status });
    const updatedTask = await taskModel.findOne({ task_id });
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

const deleteTask = async (req, res) => {
  const { task_id } = req.body;
  try {
    const task = await taskModel.findOneAndDelete({ task_id });
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

module.exports = {
  getTasks,
  getTask,
  createNewTask,
  updateTaskStatus,
  deleteTask,
};
