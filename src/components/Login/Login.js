import React, { Component } from 'react'
import { Redirect } from 'react-router'
import firebase, { googleSignIn } from '../../utils/Firebase'
import container from '../../container/index'
import './Login.css'

class Login extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: ''
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
		const emailLogin = firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
		console.log('email login', emailLogin)
		this.setState({
			email: '',
			password: ''
		})
	}

	googleLogin() {
		googleSignIn().then(result => {
			const user = result.user
			console.log('user in google login', user)
			this.props.login({ name: user.displayName, email: user.email, id: user.uid, pic: user.photoURL, available: true })
		})
	}

	render() {
		console.log('props in login', this.props)

		if (this.props.loggedIn.id) {
			return <Redirect to="/" />
		}

		return (
			<div className="user-input-container">
				<div className="login user-input">
					<input type="email" name="email" placeholder="email" onChange={this.handleChange} value={this.state.email} />
					<input
						type="password"
						name="password"
						placeholder="password"
						onChange={this.handleChange}
						value={this.state.password}
					/>
					<button onClick={this.handleSubmit}>Log In</button>
					<button className="google-login" onClick={this.googleLogin}>
						<div className="google-logo" />
						Log In With Google
					</button>
				</div>
			</div>
		)
	}
}

export default container(Login)
