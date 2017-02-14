import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from './components/Footer';
import TodoView from './components/TodoView';

const App = () => (
  <div>
    <TodoView />
    <Footer />
  </div>
);

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
);


