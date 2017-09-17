import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/carabiner.png'
import './Header.css'
import Firebase, { auth, provider, signOut } from '../../utils/Firebase'
import container from '../../container/index'

class Header extends Component {
	constructor() {
		super()
	}

	logout() {
		signOut().then(() => {
			this.props.logout()
		})
	}

	render() {
		const signedIn = (
			<div className="top-nav">
				<div
					className="user-photo"
					style={{ backgroundImage: `url(${this.props.loggedIn.pic})` || `url(public/geard_logo_k39_icon.ico)` }}
				/>
				<NavLink to="/" onClick={() => this.logout()} className="logout-link">
					Log Out
				</NavLink>
			</div>
		)

		const noUser = (
			<div className="top-nav">
				<NavLink to="/signup" className="signup-link">
					Sign Up
				</NavLink>
				<NavLink to="/login" className="login-link">
					Log In
				</NavLink>
			</div>
		)

		let userNav
		if (this.props.loggedIn) {
			userNav = signedIn
		} else {
			userNav = noUser
		}

		return (
			<section className="header">
				<div className="top">
					<div className="left-side">
						<div className="logo-container">
							<img src={logo} alt="Geard Logo" />
						</div>
						<form>
							<input placeholder="where" />
							<span className="border" />
							<input placeholder="when" />
							<span className="border" />
							<input className="btn" type="submit" value="Search" />
						</form>
					</div>
					{this.props.loggedIn.name && signedIn}
					{!this.props.loggedIn.name && noUser}
				</div>
				<div className="bottom">
					<div className="lower-nav">
						<NavLink to="/" className="explore-link">
							Explore
						</NavLink>
						<NavLink to="/adventure" className="adventure-link">
							Adventure
						</NavLink>
						<NavLink to="/type" className="type-link">
							Type
						</NavLink>
					</div>
				</div>
			</section>
		)
	}
}

export default container(Header)
