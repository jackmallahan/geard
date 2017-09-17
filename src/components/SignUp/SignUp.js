import React, { Component } from 'react'
import firebase, { googleSignIn, signOut } from '../../utils/Firebase'
import container from '../../container/index'
import { NavLink } from 'react-router-dom'

class SignUp extends Component {
	constructor() {
		super()
		this.state = {
			name: '',
			email: '',
			password: '',
			pwConfirm: '',
			pwMessage: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.googleLogin = this.googleLogin.bind(this)
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit() {
		if (this.state.password === this.state.pwConfirm) {
			this.setState({
				name: '',
				email: '',
				password: '',
				pwConfirm: ''
			})
		} else {
			this.setState({ pwMessage: <p className="pwMessage">Passwords Do Not Match</p> })
		}
	}

	googleLogin() {
		googleSignIn().then(result => {
			const user = result.user
			const userId = user._lat.slice(-9)
			console.log('user in google login', user)
			this.props.login({ name: user.displayName, email: user.email, id: userId, pic: user.photoURL })
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
				<input
					type="password"
					name="pwConfirm"
					placeholder="confirm password"
					onChange={this.handleChange}
					value={this.state.pwConfirm}
				/>
				{this.state.pwMessage}
				<button onClick={this.handleSubmit}>Sign Up</button>
				<button onClick={this.googleLogin}>Continue With Google</button>
				<h5>
					Already Have a Geard Account?{' '}
					<NavLink to="/login" className="login-link">
						Login
					</NavLink>
				</h5>
			</div>
		)
	}
}

export default container(SignUp)
