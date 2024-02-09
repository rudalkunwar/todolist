const mongoose = require("mongoose");
const taskSchema = mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Task = mongoose.model("task", taskSchema);
module.exports = Task;
