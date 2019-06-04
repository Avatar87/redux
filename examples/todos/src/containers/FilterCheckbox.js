import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Checkbox from '../components/Checkbox'


const mapStateToProps = (state, ownProps) => ({
  checked: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkbox)