import React, { Component } from "react";
import Home from "./components/homepage/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      email: null,
      password: null,
      isAuthenticated: true,
    };
  }
  errorValidation = (err) => {
    toast.error("Validation: " + err, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
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
      draggable: true,
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
    if (password === cpassword) {
      try {
        this.setState({ username, email, password }, () => {
          fetch("/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: this.state.username,
              email: this.state.email,
              password: this.state.password,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.user) {
              }
              if (data.username) {
                this.errorValidation(data.username);
              } else if (data.email) {
                this.errorValidation(data.email);
              }
              else if (data.password) {
                this.errorValidation(data.password);
              }
            })
            .catch((err) => console.log(err));
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      this.passwordNotMatch();
      return;
    }
  };
  // userLogin = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const formdata = new FormData(event.target);
  //   let email = formdata.get("email");
  //   let password = formdata.get("password");
  //   this.setState({ email, password }, () => {
  //     const notify = () => {
  //       toast.error("Firebase: " + error.message, {
  //         position: "top-right",
  //         autoClose: 2000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "colored",
  //       });
  //     };
  //     notify();
  //   });
  // };
  render() {
    return (
      <Router>
        <div>
          <ToastContainer />
          <Routes>
            <Route path="/home" element={<Home />} />
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
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
