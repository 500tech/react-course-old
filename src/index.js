import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import InnerFooter from './components/InnerFooter';
import Footer from './components/Footer';

const App = () => (
  <div>
    <section className="todoapp">
      <Header />
      <Main />
      <InnerFooter />
    </section>

    <Footer />
  </div>
);

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
);
