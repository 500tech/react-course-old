import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { title: 'Split to components', completed: true },
        { title: 'Add state', completed: false }
      ]
    };
  }

  render() {
    return (
      <ul className="todo-list">
        {
          this.state.todos.map(todo =>
            <Todo key={ todo.title } todo={ todo } />
          )
        }
      </ul>
    );
  }
}

export default TodoList;