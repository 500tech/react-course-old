import React from 'react';

class InnerHeader extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addTodo(this.titleElem.value);

    this.titleElem.value = '';
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={ this.handleSubmit }>
          <input className="new-todo"
                 placeholder="What needs to be done?"
                 autoFocus
                 ref={ elem => this.titleElem = elem }
          />
        </form>
      </header>
    );
  }
}

InnerHeader.propTypes = {
  addTodo: React.PropTypes.func.isRequired
};

export default InnerHeader;