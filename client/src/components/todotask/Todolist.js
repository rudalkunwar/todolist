import React from 'react'
import AddTask from './AddTask'
import Tasks from './Tasks'
import Taskbar from './Taskbar'

function Todolist() {
  return (
    <div>
    <Taskbar/>
    {/* <AddTask/> */}
    <Tasks/>
    </div>
  )
}

export default Todolist