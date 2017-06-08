import React from 'react';

const Total = ({ count }) => (
  <span>{ count }</span>
);

Total.propTypes = {
  count: React.PropTypes.number.isRequired
};

export default Total;