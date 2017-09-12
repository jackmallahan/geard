const gear = (state = [], action) => {
	switch (action.type) {
		case 'ADD_GEAR':
			console.log(action)
			return state.push(action.gear)
		default:
			return state
	}
}

export default gear
