export const addUser = user => {
	return {
		type: 'ADD_USER',
		user
	}
}

export const addGear = gear => {
	return {
		type: 'ADD_GEAR',
		gear
	}
}

export const postNewGear = gear => {
	e.preventDefault()
	console.log('gear in postNewGear', gear)
	const gearRef = firebase.database().ref('gear')
	gearRef.push(gear)
	dispatch(addUser(gear))
}

export const postNewUser = user => {
	e.preventDefault()
	const usersRef = firebase.database().ref('users')
	usersRef.push(user)
	dispatch(addUser(user))
}

export const getAllGear = storedGear => {}
