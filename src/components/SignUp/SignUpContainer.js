import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/index'
import SignUp from './SignUp'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => {
	console.log('state', state)
	return { loggedIn: state.loggedIn }
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ login: login }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
