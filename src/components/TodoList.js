import React, { PropTypes } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/todos';

const TodoList = ({ todos, toggle }) => (
  <ul className="todo-list">
    {
      todos.map(todo =>
        <Todo key={ todo.id }
              todo={ todo }
              toggle={ toggle }
        />
      )
    }
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps, {
  toggle: toggleTodo
})(TodoList);