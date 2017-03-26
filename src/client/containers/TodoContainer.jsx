import { connect } from 'react-redux';
import { actions } from 'Constants';
import { dispatchAction } from 'Utils/common';
import TodoList from 'Components/TodoList';

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    onTodoClick(id) {
      dispatch(dispatchAction(actions.TOGGLE_TODO, { id }));
    },
  };
}

const Todos = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default Todos;
