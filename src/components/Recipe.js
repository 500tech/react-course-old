import React from 'react';

const Recipe = ({ recipe }) => (
  <li>{ recipe.title }</li>
);

Recipe.propTypes = {
  recipe: React.PropTypes.object.isRequired
};

export default Recipe;
