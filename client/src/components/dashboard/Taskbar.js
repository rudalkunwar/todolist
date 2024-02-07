import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faTasks } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../authSlice";
import axios from "../../api/axios";
const Taskbar = () => {
  const [user_token, setToken] = useState("");
  const dispatch = useDispatch();
  const user_logout = async () => {
    try {
      const res = await axios.post("/logout", {
        userToken: user_token,
      });
      if (res) {
        dispatch(logout());
      } else {
        console.log("error logout");
      }
    } catch (e) {
      console.log(e + "error to logout");
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("acessToken");
    if (token) {
      setToken(token);
    }
  }, [user_token]);
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
