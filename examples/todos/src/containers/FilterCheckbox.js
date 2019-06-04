import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Checkbox from '../components/Checkbox'

const mapStateToProps = (state, ownProps) => ({
  checked: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (e) =>  {
  					if(e.target.checked) dispatch(setVisibilityFilter(ownProps.filter[0]))
  					else dispatch(setVisibilityFilter(ownProps.filter[1]))
  				}


})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkbox)