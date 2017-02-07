import React from 'react';
import Recipe from './Recipe';
import { connect } from 'react-redux';
import { toggleFavorite, fetchRecipes } from '../actions/recipes';
import { Link } from 'react-router';

class Recipes extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  render() {
    const { recipes, toggleFavorite } = this.props;

    return (
      <ul className="recipes">
        { recipes.map(recipe =>
          <Recipe key={ recipe.id }
                  recipe={ recipe }
                  toggleFavorite={ toggleFavorite }/>)}

        <Link to="/add" className="add">Add Recipe</Link>
      </ul>
    );
  }
}

Recipes.propTypes = {
  recipes: React.PropTypes.array.isRequired,
  toggleFavorite: React.PropTypes.func.isRequired,
  fetchRecipes: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  recipes: state.recipes
});

export default connect(mapStateToProps, { toggleFavorite, fetchRecipes })(Recipes);