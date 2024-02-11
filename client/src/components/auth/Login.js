import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faEnvelope,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./../homepage/Navbar";
import { Link, useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../api/axios";
export default function Login() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const login = (event) => {
    setLoading(true);
    const formdata = new FormData(event.target);
    let email = formdata.get("email");
    let password = formdata.get("password");
    try {
      axios
        .post("/login", { email, password })
        .then((response) => {
          const data = response.data;
          if (data.user) {
            const user = data.user;
            const token = data.accessToken;
            localStorage.setItem("username", user);
            localStorage.setItem("accessToken", token);
            navigate(`/todolist/${user}`);
          }
          if (data.email) {
            errorMessage(data.email);
          } else if (data.password) {
            errorMessage(data.password);
          }
        })
        .catch((e) => {
          errorMessage(e + "Cannot Login User ,Please try again later");
        });
    } catch (e) {
      errorMessage(e + "Cannot Login User ,Server Down!!");
    }
    event.preventDefault();
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
  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Get started with TodoFlow.
        </h2>
        <form onSubmit={login} method="POST">
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
                autoComplete="off"
                className="w-full border border-gray-300 rounded-md py-2 pl-10 focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            {isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : null} Sign
            In
          </button>
        </form>

        <p className="text-center mt-4">Or</p>
        <div>
          <button className="w-full mt-2 bg-cyan-400 text-white py-2 rounded-md hover:bg-cyan-600 transition duration-300">
            <FontAwesomeIcon
              icon={faGoogle}
              size="lg"
              className="text-yellow-400 pr-2"
            />
            <span>Login with Google</span>
          </button>
        </div>
        <div className="text-center my-3">
          <p className="font-light text-gray-600">
            Don’t have an account yet?{" "}
            <Link
              to="/register"
              className="font-medium text-primary-600 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
