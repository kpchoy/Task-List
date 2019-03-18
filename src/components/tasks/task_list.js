import React, { Component } from 'react';
import TaskListItem from './task_list_item';
import TaskListForm from './task_list_form.js';

export default class taskList extends Component {

  render() {
    const {receiveTask} = this.props.receiveTask;
    
    const tasks = this.props.tasks.map(task => {
      return (
        <TaskListItem
          key={task.id}
          task={task}
          receiveTask={receiveTask}
        />
      )
    });


    return (
      <div>
        <h1>Task List</h1>
        <ul className="task-list">
          {tasks}
        </ul>

        <h2>Task Form</h2>


      </div>
    )
  }
}
