import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text, priority}) => (
    <li 
      style={{
         display: 'inline'
      }}
      onClick={onClick}
    >
      <span
        style={{
          textDecoration: completed ? 'line-through' : 'none',
          color: (priority === 'Normal') ? 'orange' :(
                  (priority === 'High') ? 'red' :(
                    (priority === 'Low') ? 'green': ''))
        }}
      >
      {text}
      </span>
    </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired
}

export default Todo
