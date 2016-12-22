import React from 'react';
import { render } from 'react-dom';
import './index.css';

import RecipesView from './components/RecipesView';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => (
  <div>
    <Header />
    <RecipesView />
    <Footer />
  </div>
);

render(
  <App />,
  document.getElementById('root')
);
