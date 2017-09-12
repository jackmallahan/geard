const loggedIn = (state = [], action) => {
	switch (action.type) {
		case 'LOGIN':
			return Object.assign(state, {
				userName: action.user.userName,
				email: action.user.email,
				password: action.user.password,
				id: action.user.id
			})
		default:
			return state
	}
}

export default loggedIn
