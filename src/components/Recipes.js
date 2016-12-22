import React from 'react';
import Recipe from './Recipe';

const Recipes = ({ recipes, toggleFavorite }) => (
  <ul>
    { recipes.map(recipe => <Recipe key={ recipe.id }
                                    recipe={ recipe }
                                    toggleFavorite={ toggleFavorite } /> )}
  </ul>
);

Recipes.propTypes = {
  recipes: React.PropTypes.array.isRequired,
  toggleFavorite: React.PropTypes.func.isRequired
};

export default Recipes;