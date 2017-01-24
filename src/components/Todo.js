import React from 'react';

const Todo = ({ todo, toggle }) => (
  <li className={ todo.completed ? "completed" : "" }>
    <div className="view">
      <input className="toggle"
             type="checkbox"
             checked={ todo.completed }
             onChange={ () => toggle(todo.title) }
      />
      <label>{ todo.title } </label>
      <button className="destroy"></button>
    </div>
    <input className="edit" />
  </li>
);

Todo.propTypes = {
  todo: React.PropTypes.object.isRequired,
  toggle: React.PropTypes.func.isRequired
};

export default Todo;