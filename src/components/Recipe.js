import React from 'react';
import classNames from 'classnames';

const Recipe = ({ recipe, toggleFavorite }) => (
  <li className={ classNames('recipe', { 'favorite': recipe.favorite }) }
      onClick={ () => toggleFavorite(recipe.id) } >
    { recipe.title }
  </li>
);

Recipe.propTypes = {
  recipe: React.PropTypes.object.isRequired,
  toggleFavorite: React.PropTypes.func.isRequired
};

export default Recipe;