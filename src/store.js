import { createStore } from 'redux';

const initialState = {
  user: {
    name: 'Kipi'
  },
  todos: [
    { title: 'Break into components', completed: true },
    { title: 'Do more work', completed: false },
    { title: 'Finish', completed: false }
  ]
};

const reducer = (state, action) => {
  console.log('ACTION: ' + action.type, action);

  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        title: action.title,
        completed: false
      };

      return Object.assign({}, state, {
        todos: state.todos.concat(newTodo)
      });

    case 'TOGGLE':
      return Object.assign({}, state, {
        todos: state.todos.map(todo => todo.title !== action.title
          ? todo
          : Object.assign({}, todo, { completed: !todo.completed })
        )
      });

    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

window.store = store;

export default store;