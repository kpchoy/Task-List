import {RECEIVE_TASK, RECEIVE_TASKS} from '../actions/tasks_actions';

import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1, 
    body: "Morning Run",
    time: "7:30",
    done: false, 
  },
  2: {
    id: 2,
    body: "Meeting",
    time: "10:15",
    done: false,
  },
  3: {
    id: 3,
    body: "Lunch with Mike",
    time: "12:00",
    done: false,
  },
  4: {
    id: 4,
    body: "Pay Bills",
    time: "ALL DAY",
    done: false,
  },
  5: {
    id: 5,
    body: "Renew Gym Membership",
    time: "ALL DAY",
    done: false,
  },
}

export default (state = initialState, action) => {
  Object.freeze(state);
  let nextState = {};
  switch (action.type) {
  case RECEIVE_TASKS:
    action.tasks.forEach(task => {
      nextState[task.id] = task
    });
    return nextState;
  case RECEIVE_TASK:
    const newTask = Object.assign({}, {[action.task.id]: action.task});
    return merge({}, state, newTask);
  default:
    return state
  }
}
