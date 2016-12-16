import React, { PropTypes } from 'react';
import Todo from './Todo';

function TodoList({ todos, onTodoClick }) {
    return (
        <ul className="todo">
            <lh>To Do List</lh>
            {todos.map(todo => (
                <Todo key={todo.id}
                    {...todo}
                    onClick={() => { onTodoClick(todo.id) } }
                />
            ))}
        </ul>
    )
}

export default TodoList;