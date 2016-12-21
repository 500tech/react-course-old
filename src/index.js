import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  return React.createElement('h1', null, 'Hello!');
}

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
);
