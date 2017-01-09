import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { getID } from './lib/ids';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import RecipesView from './components/RecipesView';
import Header from './components/Header';
import Footer from './components/Footer';


const reducer = (state, action) => {
  console.log("Got Action " + action.type, action);

  switch (action.type) {
    case 'ADD_RECIPE':
      const newRecipe = {
        id: getID(),
        title: action.title,
        favorite: false
      };

      const newRecipes = state.recipes.concat(newRecipe);

      return Object.assign({}, state, {
        recipes: newRecipes
      });

    default:
      return state;
  }
};

const initialState = {
  recipes: [
    { id: getID(), title: 'Waffles', favorite: false },
    { id: getID(), title: 'Omelette', favorite: true },
    { id: getID(), title: 'Dog Food', favorite: true }
  ]
};

const store = createStore(reducer, initialState);

window.store = store;

const App = () => (
  <div>
    <Header />
    <RecipesView />
    <Footer />
  </div>
);

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
