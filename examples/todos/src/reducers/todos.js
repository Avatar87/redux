
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          priority: 'Normal'
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'CHOOSE_PRIORITY':    
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, priority: action.value}
          : todo
      )
    default:
      return state
  }
}

export default todos
