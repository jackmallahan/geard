import React, { Component } from 'react'

class SignUp extends Component {
	constructor() {
		super()
	}
	render() {
		return (
			<div className="sign-up">
				<input type="email" placeholder="email" />
				<input type="password" placeholder="password" />
			</div>
		)
	}
}

export default SignUp
