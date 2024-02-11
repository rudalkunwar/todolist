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

module.exports = get_task;

const add_task = async (req, res) => {
  try {
    const { title, description, user } = req.body;
    console.log(req.body);
    // Create a new task using Task model
    const task = await Task.create({ title, description, user });
    console.log(task);
    // Check if task was successfully created
    if (task) {
      res.status(200).json({ message: "Task Added Successfully", task });
    } else {
      res.status(500).json({ message: "Failed to add Task" });
    }
  } catch (error) {
    console.error("Error adding task:", error);
    res
      .status(500)
      .json({ message: "Failed to add Task", error: error.message });
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
