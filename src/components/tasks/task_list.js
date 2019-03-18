import React, { Component } from 'react'

export default class taskList extends Component {

  render() {
    const {receiveTask} = this.props.receiveTask;
    
    const tasks = this.props.tasks;


    return (
      <div>
        <h1>Task List</h1>
      </div>
    )
  }
}
