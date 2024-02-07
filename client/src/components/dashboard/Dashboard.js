import React, { useState } from "react";
import Taskbar from "./Taskbar";
import Task from "./Task";
import Cookies from "js-cookie";
import { useEffect } from "react";
export default function Dashboard() {
  const [userToken , setToken] = useState('');
  useEffect(() => {
    const token = Cookies.get("auth");
    setToken(token)
  }, []);
  return (
    <div>
      <Taskbar />
      <Task />
      <h2 className="text-black">user token:{userToken}</h2>
    </div>
  );
}
