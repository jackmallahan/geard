import React from 'react'
import { connect } from 'react-redux'
import Login from './Login.jsx'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => {
	return {}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
