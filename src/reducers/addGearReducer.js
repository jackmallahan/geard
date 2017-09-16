const gear = (state = [], action) => {
	switch (action.type) {
		case 'ADD_GEAR':
			return [...state, action.gear]
		case 'GET_GEAR':
			console.log('action', action)
			return action.storedGear
		default:
			return state
	}
}

export default gear
