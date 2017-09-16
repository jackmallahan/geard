import * as actions from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => {
	return { gear: state.gear, loggedIn: state.loggedIn }
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)
