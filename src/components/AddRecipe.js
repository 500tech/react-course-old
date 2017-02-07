import React from 'react';
import { connect } from 'react-redux';
import { addRecipe } from '../actions/recipes';
import { browserHistory } from 'react-router';
import { getID } from '../lib/ids';

class AddRecipe extends React.Component {
  onSubmit(e) {
    const id = getID();

    e.preventDefault();

    this.props.addRecipe(
      id,
      this.title.value,
      this.description.value
    );

    this.title.value = '';
    this.description.value = '';

    browserHistory.push(`/${ id }`);
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