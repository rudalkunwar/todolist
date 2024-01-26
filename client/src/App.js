import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      usersData:'',
    }
  }
  componentDidMount(){
    fetch('/backend')
  .then(res => res.json())
  .then(data => {
    this.setState({ usersData: data });
    console.log(data);
  })
}
  render() {
    return (
      <div>{this.state.usersData}</div>
    )
  }
}
