import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { getID } from './lib/ids';

import Recipes from './components/Recipes';
import AddRecipe from './components/AddRecipe';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      recipes: [
        { id: getID(), title: 'Waffles', favorite: false },
        { id: getID(), title: 'Omelette', favorite: true }
      ]
    };

    this.addRecipe = this.addRecipe.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  addRecipe(title) {
    const newRecipe = {
      id: getID(),
      title,
      favorite: false
    };

    const newRecipes = this.state.recipes.concat(newRecipe);

    this.setState({ recipes: newRecipes });
  }

  toggleFavorite(id) {
    const newRecipes = this.state.recipes.map(recipe =>
      recipe.id !== id
        ? recipe
        : { ...recipe, favorite: !recipe.favorite }
    );

    this.setState({ recipes: newRecipes });
  }

  render() {
    return (
      <div>
        <h1>Recipes:</h1>
        <Recipes recipes={ this.state.recipes } toggleFavorite={ this.toggleFavorite }/>
        <AddRecipe addRecipe={ this.addRecipe } />
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('root')
);
