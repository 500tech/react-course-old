import React from 'react';

const Todo = ({ todo, toggle }) => {
  const { title, completed } = todo;

  return (
    <li className={ completed && "completed" }>
      <div className="view">
        <input className="toggle"
               type="checkbox"
               checked={ completed }
               onChange={ () => toggle(todo.id) }
        />
        <label>{ title }</label>
        <button className="destroy"></button>
      </div>
    </li>
  );
};

Todo.propTypes = {
  todo: React.PropTypes.object.isRequired,
  toggle: React.PropTypes.func.isRequired
};

export default Todo;