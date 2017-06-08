import { getID } from './lib/ids';
import { createStore } from 'redux';

const reducer = (state, action) => {
  console.log('ACTION: ' + action.type, action);

  switch(action.type) {
    case 'TOGGLE':
      return Object.assign({}, state, {
        recipes: state.recipes.map(recipe => recipe.id !== action.id
            ? recipe
            : Object.assign({}, recipe, { favorite: !recipe.favorite }))
      });

    case 'ADD_TODO':
      const newRecipe = {
        id: getID(),
        title: action.title,
        favorite: false
      };

      return Object.assign({}, state, {
        recipes: state.recipes.concat(newRecipe)
      });

    default:
      return state;
  }
};

const initialState = {
  recipes: [
    { id: getID(), title: 'Cake', favorite: false },
    { id: getID(), title: 'Sneakers', favorite: true }
  ]
};

const store = createStore(reducer, initialState);

window.store = store;

export default store;