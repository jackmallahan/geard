import React, { Component } from 'react'
import firebase, { googleSignIn, signOut } from '../../utils/Firebase'
import container from '../../container/index'

class SignUp extends Component {
	constructor() {
		super()
		this.state = {
			name: '',
			email: '',
			password: '',
			user: null
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.googleLogin = this.googleLogin.bind(this)
		this.logout = this.logout.bind(this)
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit() {
		this.setState({
			name: '',
			email: '',
			password: ''
		})
	}

	googleLogin() {
		googleSignIn().then(result => {
			const user = result.user
			const userId = user._lat.slice(-9)
			console.log('user in google login', user.displayName)
			this.props.login({ name: user.displayName, email: user.email, id: userId })
		})
	}

	logout() {
		signOut().then(() => {
			this.props.logout()
		})
	}

	render() {
		console.log('props in sign up', this.props)
		return (
			<div className="sign-up">
				<input name="name" placeholder="Name" onChange={this.handleChange} value={this.state.name} />
				<input type="email" name="email" placeholder="email" onChange={this.handleChange} value={this.state.email} />
				<input
					type="password"
					name="password"
					placeholder="password"
					onChange={this.handleChange}
					value={this.state.password}
				/>
				<button onClick={this.handleSubmit}>Sign Up</button>
				<button onClick={this.googleLogin}>Continue With Google</button>
				<button onClick={this.logout}>Log Out</button>
			</div>
		)
	}
}

export default container(SignUp)
