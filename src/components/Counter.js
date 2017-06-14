import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ number }) => (
  <span>{ number }</span>
);

Counter.propTypes = {
  number: React.PropTypes.string
};

// Connection code

const mapStateToProps = (state) => ({
  number: state.user.name
});

export default connect(mapStateToProps)(Counter);