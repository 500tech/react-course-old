import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ number }) => (
  <span>{ number }</span>
);

Counter.propTypes = {
  number: React.PropTypes.number
};

// Connection code

const mapStateToProps = (state) => ({
  number: state.recipes.length
});

export default connect(mapStateToProps)(Counter);