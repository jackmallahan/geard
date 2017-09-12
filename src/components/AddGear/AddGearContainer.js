import { connect } from 'react-redux'
import { addGear } from '../../actions/index'
import AddGear from './AddGear'
import { bindActionCreators } from 'redux'

console.log('add gear in container', this.props)

const mapStateToProps = state => {
	console.log('state', state)
	return { gear: state.gear }
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ addGear: addGear }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGear)
