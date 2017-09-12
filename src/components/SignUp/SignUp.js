import React, { Component } from 'react'
import firebase from '../../utils/Firebase'

class SignUp extends Component {
	constructor() {
		super()
		this.state = {
			userName: '',
			email: '',
			password: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.clearFields = this.clearFields.bind(this)
		// this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	// handleSubmit(e) {
	// 	e.preventDefault()
	// 	const usersRef = firebase.database().ref('users')
	// 	const user = {
	// 		userName: this.state.userName,
	// 		email: this.state.email,
	// 		password: this.state.password
	// 	}
	// 	usersRef.push(user)
	// 	this.setState({
	// 		userName: '',
	// 		email: '',
	// 		password: ''
	// 	})
	// }

	clearFields() {
		this.setState({
			userName: '',
			email: '',
			password: ''
		})
	}

	render() {
		console.log('props', this.props)
		return (
			<div className="sign-up">
				<input name="userName" placeholder="userName" onChange={this.handleChange} value={this.state.userName} />
				<input type="email" name="email" placeholder="email" onChange={this.handleChange} value={this.state.email} />
				<input
					type="password"
					name="password"
					placeholder="password"
					onChange={this.handleChange}
					value={this.state.password}
				/>
				<button onClick={this.props.addUser({ name: this.state.name })}>Sign Up</button>
			</div>
		)
	}
}

export default SignUp
