import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  handleSubmit(event) {
    event.preventDefault();

    this.props.cb(this.elem.value);

    this.elem.value = '';
  }

  render() {
    return (
      <header className="header">
        <h1>todos { this.props.name }</h1>
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
  name: React.PropTypes.string.isRequired,
  cb: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  name: state.user.name
});

const mapDispatchToProps = (dispatch) => ({
  cb: (title) => dispatch({ type: 'ADD_TODO', title })
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);