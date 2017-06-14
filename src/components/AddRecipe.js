import React from 'react';
import { connect } from 'react-redux';
import { addRecipe } from '../actions/recipes';

class AddRecipe extends React.Component {
  onSubmit(e) {
    e.preventDefault();

    this.props.addRecipe(this.title.value);

    this.title.value = '';
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit.bind(this) }>
        <input ref={ e => this.title = e } type="text"/>
        <button>Add</button>
      </form>
    );
  }
}

AddRecipe.propTypes = {
  addRecipe: React.PropTypes.func.isRequired
};

export default connect(null, { addRecipe })(AddRecipe);