import * as action from './index'

describe('login action test', () => {
	it('should log user in', () => {
		const user = {
			email: 'email@email.com',
			password: 'test123'
		}

		const expectedAction = {
			user: {
				email: 'email@email.com',
				password: 'test123'
			},
			type: 'LOGIN'
		}
		expect(action.login(user)).toEqual(expectedAction)
	})
})

describe('logout action test', () => {
	it('should log user out', () => {
		const user = {
			email: 'email@email.com',
			password: 'test123'
		}

		const expectedAction = {
			type: 'LOGOUT'
		}

		expect(action.logout(user)).toEqual(expectedAction)
	})
})

describe('addGear action test', () => {
	it('should let the user addGear', () => {
		const testOwner = {
			email: 'email@email.com',
			password: 'test123'
		}

		const gear = {
			name: 'rope',
			activity: 'climbing',
			price: '10',
			owner: testOwner
		}

		const expectedAction = {
			gear: {
				name: 'rope',
				activity: 'climbing',
				price: '10',
				owner: {
					email: 'email@email.com',
					password: 'test123'
				}
			},
			type: 'ADD_GEAR'
		}
		expect(action.addGear(gear)).toEqual(expectedAction)
	})
})

describe('getAllGear action test', () => {
	it('should return storedGear', () => {
		const testOwner = {
			email: 'email@email.com',
			password: 'test123'
		}

		const storedGear = [
			{
				name: 'rope',
				activity: 'climbing',
				price: '10',
				owner: testOwner
			},
			{
				name: 'harness',
				activity: 'climbing',
				price: '10',
				owner: testOwner
			},
			{
				name: 'shoes',
				activity: 'climbing',
				price: '10',
				owner: testOwner
			}
		]

		const expectedAction = {
			storedGear: [
				{
					name: 'rope',
					activity: 'climbing',
					price: '10',
					owner: testOwner
				},
				{
					name: 'harness',
					activity: 'climbing',
					price: '10',
					owner: testOwner
				},
				{
					name: 'shoes',
					activity: 'climbing',
					price: '10',
					owner: testOwner
				}
			],
			type: 'GET_GEAR'
		}
		expect(action.getAllGear(storedGear)).toEqual(expectedAction)
	})
})
