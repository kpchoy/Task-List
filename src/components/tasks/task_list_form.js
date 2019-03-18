import React, { Component } from 'react'
import {uniqueId} from '../../util/unique_id';

export default class TaskListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      time: "",
      done: false,
    }

    this.updateBody = this.updateBody.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateBody(e) {
    this.setState({body: e.currentTarget.value});
  }
  
  updateTime(e) {
    this.setState({time: e.currentTarget.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const task = Object.assign({}, this.state, {id: uniqueId()});
    this.props.receiveTask(task);
    this.setState({
      body: "",
      time: "",
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Body: 
          <input type="text" onChange={this.updateBody} value={this.state.body}></input>
        </label>
        <label>
          Time: 
          <input type="text" onChange={this.updateTime} value={this.state.time}></input>
        </label>

        <button>Add Task</button>
      </form>
    )
  }
}
