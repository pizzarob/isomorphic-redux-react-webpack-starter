import React, { PropTypes } from 'react';
import Todo from 'Components/Todo';
import { actions } from 'Constants';
import { dispatchAction } from 'Utils/common';
import { connect } from 'react-redux';

function TodoList({ todos, onTodoClick }) {
  return (
    <ul className="todo">
      <lh>To Do List</lh>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => { onTodoClick(todo.id); }}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};

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

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
