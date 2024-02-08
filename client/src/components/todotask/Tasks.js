import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Tasks() {
  return (
    <div className="flex justify-center items-center h-[40rem] bg-green-200">
      <div className="max-w-lg w-full p-6 bg-orange-400 rounded-lg shadow-md">
        <div className="mb-6">
          <div className="flex justify-around p-5">
            <h2 className="text-2xl font-semibold mb-2">My Tasks </h2>
            <button className="bg-green-400 px-4 py-2 rounded-md hover:bg-green-600">
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
    </div>
  );
}

export default Tasks;
