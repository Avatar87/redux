import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { choosePriority } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

function byPriorityandName(a, b) {
   if (a.priority === 'High' && b.priority !== 'High') return -1;
   else if (a.priority === 'Normal' && b.priority === 'Low') return -1;
   else if (a.priority === 'Low' && b.priority !== 'Low') return 1;
   else if (b.priority === 'High' && a.priority !== 'High') return 1;
   else if (b.priority === 'Normal' && a.priority === 'Low') return 1;
   else if (b.priority === 'Low' && a.priority !== 'Low') return -1;
   if (a.text.toLowerCase() < b.text.toLowerCase()) return -1;
   else if (a.text.toLowerCase() > b.text.toLowerCase()) return 1;
   return 0;
}

function getUnique(arr, comp) {
  const unique = arr
  .map(e => e[comp])
  .map((e, i, final) => final.indexOf(e) === i && i)
  .filter(e => arr[e]).map(e => arr[e]);
  return unique;
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    case VisibilityFilters.SHOW_HIGH:
      return getUnique(todos.concat(todos.filter(t => t.priority === 'High')), 'text')
    case VisibilityFilters.HIDE_HIGH:
        return todos.filter(t => t.priority !== 'High')
    case VisibilityFilters.SHOW_NORMAL:
        return getUnique(todos.concat(todos.filter(t => t.priority === 'Normal')), 'text')
    case VisibilityFilters.HIDE_NORMAL:
        return todos.filter(t => t.priority !== 'Normal')
    case VisibilityFilters.SHOW_LOW:
      return getUnique(todos.concat(todos.filter(t => t.priority === 'Low')), 'text')
    case VisibilityFilters.HIDE_LOW:
        return todos.filter(t => t.priority !== 'Low')
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter).sort(byPriorityandName)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  choosePriority: (id, value) => dispatch(choosePriority(id, value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
