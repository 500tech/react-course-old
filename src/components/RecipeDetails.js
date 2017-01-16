import React from 'react';
import { connect } from 'react-redux';

const RecipeDetails = ({ recipe }) => !recipe
  ? (<h1>Not found</h1>)
  : (
  <div className="details">
    <h3>{ recipe.title }</h3>

    <div>
      <h4>Description</h4>
      { recipe.description }
    </div>
  </div>
);

RecipeDetails.propTypes = {
  recipe: React.PropTypes.object
};

const mapStateToProps = (state, ownProps) => ({
  recipe: state.recipes.find(r => r.id === parseInt(ownProps.params.id, 10))
});

export default connect(mapStateToProps)(RecipeDetails);