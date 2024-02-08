import React, { Component } from 'react'
import Todolist from '../todotask/Todolist'

export default class Task extends Component {
  render() {
    return (
      <div className='h-screen bg-cyan-300 '>
        <Todolist/>
      </div>
    )
  }
}
