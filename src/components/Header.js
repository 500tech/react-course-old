import React from 'react';
import Total from './Total';

const Header = () => (
  <header>
    <h1>Recipes Book (<Total count={ 10 }/>)</h1>
  </header>
);

export default Header;