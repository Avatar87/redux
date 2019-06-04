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

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    case VisibilityFilters.SHOW_HIGH:
        let high = false;
        if(!high){

          high = true;
          return todos.filter(t => t.priority !== 'High')
        }
        else{
          return todos.filter(t => t.priority === 'High')
        }
    case VisibilityFilters.SHOW_NORMAL:
        return todos.filter(t => t.priority !== 'Normal')
    case VisibilityFilters.SHOW_LOW:
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
