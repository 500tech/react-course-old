import React from 'react';

const Todo = ({ todo }) => (
  <li className={ todo.completed ? "completed" : "" }>
    <div className="view">
      <input className="toggle"
             type="checkbox"
             checked={ todo.completed }/>

      <label>{ todo.title }</label>
      <button className="destroy"></button>
    </div>
    <input className="edit" value="Create a TodoMVC template"/>
  </li>
);

Todo.propTypes = {
  todo: React.PropTypes.object.isRequired
};

export default Todo;