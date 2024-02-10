const Task = require("../models/task");

const get_task = (req, res) => {
  res.status(200).json({ message: "No Task" });
};

const add_task = async (req, res) => {
  const task = req.body;
  try {
    const task = await Task.create({ task });
    res.status(200).json({ message: "Task Added Sucessfully" });
  } catch {
    res.status(400).json({ message: "Failed to add Task" });
  }
};

const edit_task = (req, res) => {};
const update_task = (req, res) => {};
const delete_task = (req, res) => {};

module.exports = {
  get_task,
  add_task,
  edit_task,
  update_task,
  delete_task,
};
