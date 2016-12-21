import React from 'react';
import classNames from 'classnames';

const Recipe = ({ recipe }) => (
  <li className={ classNames({ 'favorite': recipe.favorite }) }>{ recipe.title }</li>
);

Recipe.propTypes = {
  recipe: React.PropTypes.object.isRequired
};

export default Recipe;