const gear = (state = [], action) => {
	console.log('gear action', action)
	switch (action.type) {
		case 'ADD_GEAR':
			return [...state, ...action.gear]
		default:
			return state
	}
}

export default gear
