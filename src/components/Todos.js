import React from 'react';
import Todo from './Todo';

const Todos = (props) => (
  <ul className="todo-list">
    {
      props.todos.map(todo =>
        <Todo
          key={ todo.title }
          todo={ todo }
          toggle={ props.toggle }
        />
      )
    }
  </ul>
);

Todos.propTypes = {
  todos: React.PropTypes.array.isRequired,
  toggle: React.PropTypes.func.isRequired
};

export default Todos;