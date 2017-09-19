import React, { Component } from 'react'
import { Redirect } from 'react-router'
import container from '../../container/index'
import { NavLink } from 'react-router-dom'
import firebase, { googleSignIn } from '../../utils/Firebase'

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
			firebase
				.auth()
				.createUserWithEmailAndPassword(this.state.email, this.state.password)
				.then(result => {
					this.props.login({
						name: this.state.name,
						email: result.email,
						id: result.uid
					})
				})
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
			this.props.login({ name: user.displayName, email: user.email, id: user.uid, pic: user.photoURL })
		})
	}

	render() {
		console.log('props in sign up', this.props)
		if (this.props.loggedIn.id) {
			return <Redirect to="/" />
		}

		return (
			<div className="user-input-container">
				<div className="user-input">
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
					<button className="google-login" onClick={this.googleLogin}>
						<div className="google-logo" />
						Continue With Google
					</button>
					<h5>
						Already Have a Geard Account?{' '}
						<NavLink to="/login" className="login-link">
							Login
						</NavLink>
					</h5>
				</div>
			</div>
		)
	}
}

export default container(SignUp)
