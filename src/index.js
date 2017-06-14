import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainView from './components/MainView';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [

      ]
    }
  }

  toggleTodo(title) {
    const updatedTodos = this.state.todos.map(todo => todo.title !== title
      ? todo
      : Object.assign(todo, { completed: !todo.completed })
    );

    this.setState({
      todos: updatedTodos
    })
  }

  addTodo(title) {
    const newTodo = {
      title: title,
      completed: false
    };

    this.setState({
      todos: this.state.todos.concat(newTodo)
    });
  }

  render() {
    return (
      <div>
        <MainView addTodo={ this.addTodo.bind(this) }
                  toggleTodo={ this.toggleTodo.bind(this) }
                  todos={ this.state.todos }
        />
        <Footer count={ this.state.todos.filter(t => t.completed).length }/>
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
