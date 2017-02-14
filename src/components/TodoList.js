import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggle }) => (
  <ul className="todo-list">
    {
      todos.map(todo =>
        <Todo key={ todo.id }
              todo={ todo }
              toggle={ toggle }
        />
      )
    }
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired
};

export default TodoList;