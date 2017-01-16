import React from 'react';
import Recipe from './Recipe';
import { connect } from 'react-redux';
import { toggleFavorite } from '../actions/recipes';

const Recipes = ({ recipes, toggleFavorite }) => (
  <ul className="recipes">
    { recipes.map(recipe =>
      <Recipe key={ recipe.id }
              recipe={ recipe }
              toggleFavorite={ toggleFavorite } /> )}
  </ul>
);

Recipes.propTypes = {
  recipes: React.PropTypes.array.isRequired,
  toggleFavorite: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
};

const ConnectedRecipes = connect(
  mapStateToProps, { toggleFavorite })(Recipes);

export default ConnectedRecipes;