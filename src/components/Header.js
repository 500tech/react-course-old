import React from 'react';

class Header extends React.Component {
  handleSubmit(event) {
    event.preventDefault();

    this.props.cb(this.elem.value);

    this.elem.value = '';
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <input className="new-todo"
                 placeholder="What needs to be done?"
                 autoFocus
                 ref={ element => this.elem = element }
          />
        </form>
      </header>
    );
  }
}

Header.propTypes = {
  cb: React.PropTypes.func.isRequired
};

export default Header;