import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from './components/Footer';
import TodoView from './components/TodoView';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { TOGGLE } from './consts/action-types';

let id = 0;
const getID = () => id += 1;

const reducer = (state, action) => {
  console.log('ACTION: ' + action.type, action);

  switch (action.type) {
    case TOGGLE:
      const updateTodos = state.todos.map(todo => todo.id !== action.id
        ? todo
        : Object.assign({}, todo, {
          completed: !todo.completed
        })
      );

      return Object.assign({}, state, {
        todos: updateTodos
      });

    default:
      return state;
  }
};

const initialState = {
  todos: [
    {
      id: getID(),
      title: 'Move state to Redux',
      completed: true
    },
    {
      id: getID(),
      title: 'Add "Add Todo" action',
      completed: false
    },
    {
      id: getID(),
      title: 'Implement the Reducer',
      completed: false
    }
  ]
};

const store = createStore(reducer, initialState);

window.store = store;

const App = () => (
  <div>
    <TodoView />
    <Footer />
  </div>
);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);


