import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "../../api/axios";

function Tasks() {
  const [form, ToggleForm] = useState(false);
  const [tasks, setTask] = useState([]);
  const addTask = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    try {
      const response = axios.post("/task/add", { title,description });
      if (response) {
        console.log(response.data.message);
      } else {
        console.log("unable to add task");
      }
    } catch {
      console.log("Server error");
    }
  };
  const getTasks = async () => {
    try {
      const response = await axios.get("/todolist");
      if (response) {
        console.log("sucess");
      }
    } catch (e) {
      console.log("Server error");
    }
  };
  useEffect(() => {
    getTasks();
  });
  return (
    <div className="flex justify-center items-center h-[40rem] bg-green-200">
      <div className="max-w-lg w-full p-6 bg-orange-400 rounded-lg shadow-md">
        <div className="mb-6">
          <div className="flex justify-around p-5">
            <h2 className="text-2xl font-semibold mb-2">My Tasks </h2>
            <button
              onClick={() => ToggleForm(true)}
              className="bg-green-400 px-4 py-2 rounded-md hover:bg-green-600"
            >
              <FontAwesomeIcon icon={faPlus} />
              <span className="ml-2">Add Task</span>
            </button>
          </div>
          <h2 className="text-2xl font-semibold mb-2">Ongoing </h2>
          <ul>
            <li className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              <span>Study</span>
            </li>
            <li className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              <span>Gym</span>
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>Running</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Completed </h2>
          <ul>
            <li className="mb-2">Study</li>
            <li className="mb-2">Gym</li>
          </ul>
        </div>
      </div>

      {form && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-1/4 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Add Task</h2>
            <form onSubmit={addTask}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="title"
                >
                  Title:
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="title"
                  type="text"
                  name="title"
                  placeholder="Enter Title"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="description"
                >
                  Description:
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="description"
                  type="text"
                  name="description"
                  placeholder="Enter Description"
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-green-400 px-4 py-2 rounded-md hover:bg-green-600 text-white"
                  type="submit"
                >
                  Add
                </button>
                <button
                  className="ml-2 bg-gray-400 px-4 py-2 rounded-md hover:bg-gray-600 text-white"
                  onClick={() => ToggleForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tasks;
