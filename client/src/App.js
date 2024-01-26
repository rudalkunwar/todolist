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

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users:[],
      email: null,
      password: null,
      isAuthenticated: true,
    };
  }
  componentDidMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyBK_-N7_pgKz8x3_5ZYObEcAJN3CLSSM74",
      authDomain: "todolist-aff4b.firebaseapp.com",
      projectId: "todolist-aff4b",
      storageBucket: "todolist-aff4b.appspot.com",
      messagingSenderId: "158404131532",
      appId: "1:158404131532:web:a8aed9bc82473e3f99a069",
    };
    const app = initializeApp(firebaseConfig);

    fetch('/backend',{
      method:'get',
    }).then(response=>response.json())
    .then(data=>{
      console.log(data); 
      this.setState({
        users:data.users,
      });
      console.log(this.state.users);
    });
  }
  userRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const formdata = new FormData(event.target);
    let email = formdata.get("email");
    let password = formdata.get("password");
    let cpassword = formdata.get("cpassword");
    if (password === cpassword) {
      this.setState({ email, password }, () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            const notify = () => {
              toast.success("Registration Sucessfull.Now you can login.", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            };
            notify();
            form.reset();
          })
          .catch((error) => {
            const notify = () => {
              toast.error("Firebase: " + error.message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            };
            notify();
          });
      });
    } else {
      const notify = () => {
        toast.warn("Password doesnot match.", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      };
      notify();
    }
  };
  userLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const formdata = new FormData(event.target);
    let email = formdata.get("email");
    let password = formdata.get("password");
    this.setState({ email, password }, () => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          this.setState({ isAuthenticated: true });
          form.reset();
        })
        .catch((error) => {
          const notify = () => {
            toast.error("Firebase: " + error.message, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          };
          notify();
        });
    });
  };
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
