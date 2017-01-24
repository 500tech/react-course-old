import React from 'react';
import Header from './Header';
import InnerFooter from './InnerFooter';
import Todos from './Todos';

const MainView = ({ addTodo, toggleTodo, todos }) => (
  <section className="todoapp">

    <Header cb={ addTodo }/>

    <section className="main">
      <input className="toggle-all" type="checkbox"/>
      <Todos todos={ todos }
             toggle={ toggleTodo }/>
    </section>

    <InnerFooter />
  </section>
);

MainView.propTypes = {
  addTodo: React.PropTypes.func.isRequired,
  toggleTodo: React.PropTypes.func.isRequired,
  todos: React.PropTypes.array.isRequired
};

export default MainView;