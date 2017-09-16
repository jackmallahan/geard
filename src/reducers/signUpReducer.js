const loggedIn = (state = {}, action) => {
	switch (action.type) {
		case 'LOGIN':
			return Object.assign({}, state, action.user)
		case 'LOGOUT':
			return (state = {})
		default:
			return state
	}
}

export default loggedIn
