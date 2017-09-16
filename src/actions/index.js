export const login = user => {
	return {
		type: 'LOGIN',
		user
	}
}

export const addGear = gear => {
	return {
		type: 'ADD_GEAR',
		gear
	}
}

export const getAllGear = storedGear => {
	return {
		type: 'GET_GEAR',
		storedGear
	}
}
