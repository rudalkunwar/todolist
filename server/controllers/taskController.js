const Task = require("../models/task");

const get_task = async (req, res) => {
  const user = req.params.user;
  try {
    // Find tasks associated with the user's username
    const tasks = await Task.find({ user });
    if (tasks.length === 0) {
      return res.status(200).json({ message: "No tasks found for the user" });
    }

    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const add_task = async (req, res) => {
  try {
    const { title, description, user } = req.body;
    const task = await Task.create({ title, description, user });
    if (task) {
      res.status(200).json({ message: "Task Added Successfully", task });
    } else {
      res.status(500).json({ message: "Failed to add Task" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add Task", error: error.message });
  }
};
const delete_task = async (req, res) => {
  const id = req.query.id;
  console.log(id);
  try {
    const response = await Task.findByIdAndDelete(id);
    if (response) {
      res.status(200).json({ message: "Task Deleted Successfully" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete Task", error: error.message });
  }
};

module.exports = {
  get_task,
  add_task,
  delete_task,
};
