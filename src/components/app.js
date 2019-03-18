import React, { Component } from 'react';
import TaskListContainer from './tasks/task_list_container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is the App component</h1>
        <TaskListContainer/>
      </div>
    );
  }
}

export default App;
