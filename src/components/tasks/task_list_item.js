import React, { Component } from 'react'

export default class TaskListItem extends Component {
  render() {
    const {id, body, time, done} = this.props.task;
    return (
      <li key={id} className="task-list-item">
        <p>{body}</p>
        <p>{time}</p>
        <p>{done}</p>
      </li>
    )
  }
}
