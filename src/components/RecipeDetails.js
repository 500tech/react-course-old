import React from 'react';
import { connect } from 'react-redux';
import { toggleFavorite } from '../actions/recipes';

export const RecipeDetails = ({ recipe, toggle }) => (
  <div className="details">
    <h3>{ recipe.title }</h3>

    <input type="checkbox"
           id="favorite"
           checked={ recipe.favorite }
           onChange={ () => toggle(recipe.id) } />
    <label htmlFor="favorite"> favorite</label>

    <div>
      <h4>Description</h4>
      { recipe.description }
    </div>
  </div>
);

const RecipeDetailsWrapper = (props) => !props.recipe
  ? (<h1>Not found</h1>)
  : <RecipeDetails { ...props } />;


RecipeDetailsWrapper.propTypes = {
  recipe: React.PropTypes.object,
  toggle: React.PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  recipe: state.recipes.find(r => r.id === parseInt(ownProps.params.id, 10))
});

export default connect(mapStateToProps, { toggle: toggleFavorite })(RecipeDetailsWrapper);