import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;
    addTask(taskName);
    setTaskName("");
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-50">
      <form
        onSubmit={handleSubmit}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-600 rounded-md p-6"
      >
        <div className="flex justify-between">
          <h2 className="py-3 text-white">Add Task</h2>
          <button className=" text-4xl text-white">&times;</button>
        </div>
        <input
          type="text"
          className="w-full border rounded-md p-2 mr-2"
          placeholder="Enter task..."
          // value={taskName}
          // onChange={(e) => setTaskName(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-md px-4 py-2 my-3 w-full hover:bg-blue-700"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
