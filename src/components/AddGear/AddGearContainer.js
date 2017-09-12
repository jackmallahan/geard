import React from 'react'
import { connect } from 'react-redux'
import { postNewGear } from '../../actions/actions'
import AddGear from '../AddGear/AddGear'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => {
	console.log('state', state)
	return { gear: state.gear }
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ addGear: postNewGear }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGear)
