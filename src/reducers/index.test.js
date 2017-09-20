import * as action from '../actions/index'
import addGearReducer from './addGearReducer'
import signUpReducer from './signUpReducer'

describe('addGearReducer', () => {
	it('should return the initial state', () => {
		expect(addGearReducer(undefined, {})).toEqual([])
	})

	it('should handle ADD_GEAR', () => {
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

		expect(
			addGearReducer([], {
				type: 'ADD_GEAR',
				gear
			})
		).toEqual([
			{
				name: 'rope',
				activity: 'climbing',
				price: '10',
				owner: testOwner
			}
		])
	})

	it('should handle GET_GEAR', () => {
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
			}
		]

		expect(
			addGearReducer([], {
				type: 'GET_GEAR',
				storedGear
			})
		).toEqual([
			{
				name: 'rope',
				activity: 'climbing',
				price: '10',
				owner: testOwner
			}
		])
	})
})

describe('signUpReducer', () => {
	it('should return the initial state', () => {
		expect(signUpReducer(undefined, {})).toEqual({})
	})

	it('should handle LOGIN', () => {
		const user = {
			email: 'email@email.com',
			password: 'test123'
		}

		expect(
			signUpReducer(
				{},
				{
					type: 'LOGIN',
					user
				}
			)
		).toEqual({
			email: 'email@email.com',
			password: 'test123'
		})
	})

	it('should handle LOGOUT', () => {
		const user = {
			email: 'email@email.com',
			password: 'test123'
		}

		expect(
			signUpReducer(
				{},
				{
					type: 'LOGOUT'
				}
			).toEqual({})
		)
	})
})
