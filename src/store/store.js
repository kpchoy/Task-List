import { createStore } from 'redux';
import tasksReducer from '../reducers/tasks_reducer';

const configureStore = (preloadedState = {}) => {
  const store = createStore(tasksReducer, preloadedState);
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
}

export default configureStore;