import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./../homepage/Navbar";
import { Link, useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../api/axios";
export default function Register() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const register = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formdata = new FormData(event.target);
    let username = formdata.get("username");
    let email = formdata.get("email");
    let password = formdata.get("password");
    let cpassword = formdata.get("cpassword");
    if (password.length < 8) {
      errorMessage("Password should have minimum 8 Characters");
      return;
    }
    if (password === cpassword) {
      try {
        const response = await axios.post("/register", {
          username,
          email,
          password,
        });
        if (response) {
          const data = response.data;
          if (data.user) {
            const token = data.accessToken;
            const user = data.user;
            localStorage.setItem("username", user);
            localStorage.setItem("acessToken", token);
            navigate(`/todolist/${user}`);
          }
          if (data.email) {
            errorMessage(data.email);
          }
          if (data.username) {
            errorMessage(data.username);
          } else if (data.password) {
            errorMessage(data.password);
          }
        } else {
          errorMessage("Cannot Register User ,Please try again later");
        }
      } catch (e) {
        errorMessage("Cannot Register User ,Server Down!!");
      }
    } else {
      passwordNotMatch();
      return;
    }
  };
  const errorMessage = (err) => {
    setLoading(false);
    toast.error(err, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const passwordNotMatch = () => {
    setLoading(false);
    toast.warn("Password doesnot match.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Get started with TodoFlow.
        </h2>
        <form onSubmit={register} name="register" method="POST">
          <div className="mb-4">
            <label
              htmlFor="Username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <div className="relative">
              <FontAwesomeIcon
                icon={faUser}
                className="absolute top-3 left-3 text-gray-500"
              />
              <input
                type="Username"
                id="Username"
                name="username"
                className="w-full border border-gray-300 rounded-md py-2 pl-10 focus:outline-none focus:border-blue-500"
                placeholder="Enter your Username"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <div className="relative">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute top-3 left-3 text-gray-500"
              />
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md py-2 pl-10 focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <div className="relative">
              <FontAwesomeIcon
                icon={faLock}
                className="absolute top-3 left-3 text-gray-500"
              />
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded-md py-2 pl-10 focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="cpassword"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Confirm Password
            </label>
            <div className="relative">
              <FontAwesomeIcon
                icon={faLock}
                className="absolute top-3 left-3 text-gray-500"
              />
              <input
                type="password"
                id="cpassword"
                name="cpassword"
                className="w-full border border-gray-300 rounded-md py-2 pl-10 focus:outline-none focus:border-blue-500"
                placeholder="Confirm your password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            {isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : null}{" "}
            Register
          </button>
        </form>

        <p className="text-center mt-4">Or register with</p>
        <div>
          <button className="w-full mt-2 bg-cyan-400 text-white py-2 rounded-md hover:bg-cyan-600 transition duration-300">
            <FontAwesomeIcon
              icon={faGoogle}
              size="lg"
              className="text-yellow-400 pr-2"
            />
            <span>Google</span>
          </button>
        </div>
        <div className="text-center my-3">
          <p className="font-light text-gray-600">
            Already have an account yet?{" "}
            <Link
              to="/login"
              className="font-medium text-primary-600 hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
