const mongoose = require("mongoose");
const taskSchema = mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    user:{
      required:true,
      type:mongoose.Schema.Types.ObjectId,
      ref:'User'
    }
  },
  { timestamps: true },
);
const Task = mongoose.model("task", taskSchema);
module.exports = Task;
