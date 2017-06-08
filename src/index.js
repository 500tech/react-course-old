import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
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
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
