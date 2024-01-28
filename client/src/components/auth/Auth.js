import React, { Component } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "../dashboard/Dashboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      email: null,
      password: null,
      isAuthenticated: true,
    };
  }
  errorMessage = (err) => {
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

  passwordNotMatch = () => {
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
  userRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const formdata = new FormData(event.target);
    let username = formdata.get("username");
    let email = formdata.get("email");
    let password = formdata.get("password");
    let cpassword = formdata.get("cpassword");
    if (password.length < 8) {
      this.errorMessage("Password should have minimum 8 Characters");
      return;
    }
    if (password === cpassword) {
      try {
        this.setState({ username, email, password }, () => {
          axios
            .post(
              "/register",
              {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
            .then((res) => {
              const data = res.data;
              if (data.user) {
                window.location.href = "/dashboard";
              }
              if (data.username) {
                this.errorMessage(data.username);
              } else if (data.email) {
                this.errorMessage(data.email);
              } else if (data.password) {
                this.errorMessage(data.password);
              }
            })
            .catch((err) =>
              this.errorMessage("Cannot Register,Please try again later")
            );
        });
      } catch (e) {
        this.errorMessage("Cannot Register User ,Please try again later");
      }
    } else {
      this.passwordNotMatch();
      return;
    }
  };
  userLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const formdata = new FormData(event.target);
    let email = formdata.get("email");
    let password = formdata.get("password");
    this.setState({ email, password }, () => {
      try {
        axios
          .post(
            "/login",
            {
              email: this.state.email,
              password: this.state.password,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            const data = response.data;
            if (data.user) {
              console.log(data.user);
              window.location.href = "/dashboard";
            } else if (data.email) {
              this.errorMessage(data.email);
            } else if (data.password) {
              this.errorMessage(data.password);
            }
          })
          .catch((e) =>
            this.errorMessage("Cannot Register User ,Please try again later")
          );
      } catch (e) {
        this.errorMessage("Cannot Register User ,Please try again later");
      }
    });
  };
  render() {
    return (
      <Router>
        <div>
          <ToastContainer />
          <Routes>
            <Route
              path="/register"
              element={<Register register={this.userRegistration} />}
            />
            <Route path="/login" element={<Login login={this.userLogin} />} />
            <Route
              path="/dashboard"
              element={
                this.state.isAuthenticated ? (
                  <Dashboard />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default Auth;
