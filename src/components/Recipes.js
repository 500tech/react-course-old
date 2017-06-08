import React from 'react';
import Recipe from './Recipe';
import { connect } from 'react-redux';

const Recipes = ({ recipes, toggleFavorite }) => (
  <ul className="recipes">
    { recipes.map(recipe => <Recipe key={ recipe.id }
                                    recipe={ recipe }
                                    toggleFavorite={ toggleFavorite } /> )}
  </ul>
);

Recipes.propTypes = {
  recipes: React.PropTypes.array.isRequired,
  toggleFavorite: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  recipes: state.recipes
});

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (id) => dispatch({ type: 'TOGGLE', id })
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
