import React from 'react'
import { connect } from 'react-redux'
import { postNewUser } from '../../actions/actions'
import SignUp from './SignUp'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => {
	console.log('state', state)
	return { users: state.users }
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ addUser: postNewUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
