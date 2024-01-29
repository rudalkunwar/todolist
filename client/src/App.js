import React, { Component } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/homepage/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the Font Awesome CSS

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      email: null,
      password: null,
      isAuthenticated: true,
      isLoading: false,
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
        this.errorMessage("Cannot Login User ,Server Down!!");
      }
    } else {
      this.passwordNotMatch();
      return;
    }
  };
  userLogin = (event) => {
    this.setState({ isLoading: true });
    const form = event.target;
    const formdata = new FormData(event.target);
    let email = formdata.get("email");
    let password = formdata.get("password");
    this.setState({ email, password }, async () => {
      try {
        const response = await axios.post(
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
        );

        if (response) {
          this.setState({ isLoading: false });
          const data = response.data;
          if (data.user) {
            console.log(data.user);
          }
          if (data.email) {
            this.errorMessage(data.email);
          } else if (data.password) {
            this.errorMessage(data.password);
          }
        } else {
          this.errorMessage("Cannot Login User ,Please try again later");
        }
      } catch (e) {
        this.setState({ isLoading: false });
        this.errorMessage("Cannot Login User ,Server Down!!");
      }
    });
    event.preventDefault();
  };
  render() {
    return (
      <>
        <ToastContainer />
        <Router>
          <div>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route
                path="/register"
                element={<Register register={this.userRegistration} />}
              />
              <Route
                path="/login"
                element={
                  <Login
                    login={this.userLogin}
                    isLoading={this.state.isLoading}
                  />
                }
              />
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
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
