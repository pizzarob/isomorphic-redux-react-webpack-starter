import React, { PropTypes } from 'react';

function Todo({ text, completed, onClick }) {
    return (
        <li>{text}-  {completed ? 'Done' : 'Not Done'}- <button onClick={onClick}>Toggle</button></li>
    );
}

Todo.propTypes = {
    onClick: PropTypes.func,
    completed: PropTypes.bool,
    text: PropTypes.string.isRequired,
};

export default Todo