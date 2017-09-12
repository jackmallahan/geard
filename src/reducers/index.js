import { combineReducers } from 'redux'
import users from './signUpReducer'
import gear from './addGearReducer'

const rootReducer = combineReducers({
	users,
	gear
})

export default rootReducer
