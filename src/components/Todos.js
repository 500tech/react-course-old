import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

const Todos = (props) => (
  <ul className="todo-list">
    {
      props.todos.map(todo =>
        <Todo
          key={ todo.title }
          todo={ todo }
          toggle={ props.toggle }
        />
      )
    }
  </ul>
);

Todos.propTypes = {
  todos: React.PropTypes.array.isRequired,
  toggle: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  toggle: (title) => dispatch({ type: 'TOGGLE', title })
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);


