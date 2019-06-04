import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import Priorityselect from './Priorityselect'


const TodoList = ({ todos, toggleTodo, choosePriority }) => (
  <ul>
    {todos.map(todo =>
      <div
        key={todo.id}
        style={{
          marginBottom: '10px'
        }}
      >
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
        />
        <Priorityselect
          key={todo.priority}
          selected = {todo.priority}
          choosePriority={(e) => choosePriority(todo.id, e.target.value)}
        />
      </div>
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  choosePriority: PropTypes.func.isRequired
}

export default TodoList
