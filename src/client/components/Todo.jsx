import React, { PropTypes } from 'react';

function Todo({ text, completed, onClick }) {
  return (
    <li>
      <div className="flex-parent flex-align-center flex-justify-between">
        <span>{text} - {completed ? 'Done' : 'Not Done'}</span>
        <button className="btn" onClick={onClick}>Toggle</button>
      </div>
    </li>
  );
}

Todo.propTypes = {
  onClick: PropTypes.func,
  completed: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

export default Todo;
