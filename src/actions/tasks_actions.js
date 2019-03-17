export const RECEIVE_TASK="RECEIVE_TASK";
export const RECEIVE_TASKS="RECEIVE_TASKS";

export const receiveTask = task => ({
  type: RECEIVE_TASK,
  task,
})

export const receiveTasks = tasks => ({
  type: RECEIVE_TASKS,
  tasks,
})