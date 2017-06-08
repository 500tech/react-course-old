import React from 'react';
import { getID } from '../lib/ids';
import Recipes from './Recipes';
import AddRecipe from './AddRecipe';

class RecipesView extends React.Component {
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
      <div className="main">

        <div className="pane">
          <Recipes />
        </div>

        <div className="pane">
          <AddRecipe addRecipe={ this.addRecipe }/>
        </div>

      </div>
    );
  }
}

export default RecipesView;