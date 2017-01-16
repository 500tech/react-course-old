import React from 'react';
import { connect } from 'react-redux';
import { addRecipe } from '../actions/recipes';
import { browserHistory } from 'react-router';

class AddRecipe extends React.Component {
  onSubmit(e) {
    e.preventDefault();

    this.props.addRecipe(
      this.title.value,
      this.description.value
    );

    this.title.value = '';
    this.description.value = '';

    browserHistory.push('/');
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit.bind(this) }>
        <input ref={ e => this.title = e } type="text"/>
        <textarea ref={ e => this.description = e }></textarea>
        <button>Add</button>
      </form>
    );
  }
}

AddRecipe.propTypes = {
  addRecipe: React.PropTypes.func.isRequired
};

export default connect(null, { addRecipe })(AddRecipe);