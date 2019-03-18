import TaskList from './task_list';
import {receiveTask} from '../../actions/tasks_actions';
import {connect} from 'react-redux';
import {allTasks} from '../../reducers/selectors';

const mapStateToProps = state => ({
  tasks: allTasks(state),
});

const mapDispatchToProps = dispatch => ({
  receiveTask: task => dispatch(receiveTask(task)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);

