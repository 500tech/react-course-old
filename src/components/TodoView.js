import React from 'react';
import InnerFooter from './InnerFooter';
import InnerHeader from './InnerHeader';
import TodoList from './TodoList';

let id = 0;
const getID = () => id += 1;

class TodoView extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          id: getID(),
          title: 'Implement the Reducer',
          completed: false
        }
      ]
    }
  }

  addTodo = (title) => {
    const newTodo = {
      id: getID(),
      title,
      completed: false
    };

    this.setState({
      todos: this.state.todos.concat(newTodo)
    });
  };

  toggle = (id) => {
    const newTodoList = this.state.todos.map(todo =>
      todo.id !== id
        ? todo
        : Object.assign({}, todo, {
        completed: !todo.completed
      })
    );

    this.setState({
      todos: newTodoList
    });
  };

  render() {
    return (
      <section className="todoapp">
        <InnerHeader addTodo={ this.addTodo }/>

        <section className="main">
          <input className="toggle-all" type="checkbox"/>
          <TodoList />
        </section>

        <InnerFooter />
      </section>
    );
  }
}

TodoView.propTypes = {
};

export default TodoView;