import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faTasks } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
const Taskbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  const user_logout = async () => {
    try {
      const res = await axios.post("/logout", {
        userToken: token,
      });
      if (res) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("username");
        localStorage.removeItem("isAuth");
        navigate("/");
      } else {
        console.log("error logout");
      }
    } catch (e) {
      console.log(e + "error to logout");
    }
  };
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <FontAwesomeIcon icon={faTasks} className="mr-2" />
        <Link to="/home">TodoFlow</Link>
      </div>
      <div className="relative w-1/2 flex justify-end">
        <div>
          <button className="relative z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
            <img
              src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400"
              alt="Profile"
            />
          </button>
        </div>
        <Link>
          <button
            onClick={user_logout}
            className="mr-4 py-2 px-4 bg-primary hover:bg-opacity-80 text-white rounded-lg"
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
            Logout
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Taskbar;
