import React, { Component } from 'react'
import firebase from '../../utils/Firebase'

class SignUp extends Component {
	constructor() {
		super()
		this.state = {
			userName: '',
			email: '',
			password: '',
			id: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit(e) {
		e.preventDefault()
		const usersRef = firebase.database().ref('users')
		const user = {
			userName: this.state.userName,
			email: this.state.email,
			password: this.state.password
		}
		usersRef.push(user)
		this.setState({
			userName: '',
			email: '',
			password: ''
		})
	}

	render() {
		console.log('props in sign up', this.props)
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
				<button onClick={this.props.handleSubmit}>Sign Up</button>
			</div>
		)
	}
}

export default SignUp
