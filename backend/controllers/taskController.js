const Task = require("../models/taskModel.js");
const mongoose = require("mongoose");

// get all categories
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ error: "GETALL Cant find categories" });
  }
};

// create a new category
const createTask = async (req, res) => {
  try {
    const taskData = req.body;
    await Task.create(taskData);
    res.status(201).json({ message: "success" }); // Return the created ObjectId in a JSON object  }
  } catch (error) {
    return res.status(500).json({ error: "POST cant create task" });
  }
};
module.exports = {
  getTasks,
  createTask,
};
