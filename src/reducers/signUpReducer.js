const users = (state = [], action) => {
	console.log('action', action)
	switch (action.type) {
		case 'ADD_USER':
			return Object.assign(state, {
				userName: action.user.userName,
				email: action.user.email,
				password: action.user.password
			})
		default:
			return state
	}
}

export default users
