import { VisibilityFilters } from '../actions'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
    if(state === VisibilityFilters.SHOW_ALL || state === VisibilityFilters.SHOW_COMPLETED || state === VisibilityFilters.SHOW_ACTIVE){
      return action.filter
    }
    else{
    	return action.filter
    }
    default:
      return state
  }
}

export default visibilityFilter
