import React from 'react';

const Footer = ({ count }) => (
  <footer className="info">
    <p>Items left: { count }</p>
  </footer>
);

Footer.propTypes = {
  count: React.PropTypes.number.isRequired
};

export default Footer;