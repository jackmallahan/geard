import { combineReducers } from 'redux'
import loggedIn from './signUpReducer'
import gear from './addGearReducer'

const rootReducer = combineReducers({
	loggedIn,
	gear
})

export default rootReducer
