let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const choosePriority = (id, value) => ({
  type: 'CHOOSE_PRIORITY',
  id,
  value
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_HIGH: 'SHOW_HIGH',
  HIDE_HIGH: 'HIDE_HIGH',
  SHOW_NORMAL: 'SHOW_NORMAL',
  HIDE_NORMAL: 'HIDE_NORMAL',
  SHOW_LOW: 'SHOW_LOW',
  HIDE_LOW: 'HIDE_LOW'
}

