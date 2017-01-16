import React from 'react';
import Recipes from './Recipes';

const RecipesView = ({ children }) => (
  <div className="main">

    <div className="pane">
      <Recipes />
    </div>

    <div className="pane">
      { children }
    </div>

  </div>
);

export default RecipesView;