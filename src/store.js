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
    case 'SOMETHING':
      return state;

    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

window.store = store;

export default store;