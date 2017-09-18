import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import logo from '../../assets/carabiner.png'
import './Header.css'
import { signOut } from '../../utils/Firebase'
import container from '../../container/index'

class Header extends Component {
	logout() {
		signOut().then(() => {
			this.props.logout()
		})
	}

	render() {
		let userName
		let userPic
		if (this.props.loggedIn.name) {
			userName = this.props.loggedIn.name.split(' ', 1)
			userPic = this.props.loggedIn.pic
		} else {
			userPic = `https://www.mountaineers.org/images/placeholder-images/placeholder-contact-profile/image_preview`
		}

		const searchBar = (
			<form>
				<input placeholder="where" />
				<span className="border" />
				<input placeholder="when" />
				<span className="border" />
				<input className="btn" type="submit" value="Search" />
			</form>
		)

		const userProfile = `/profile/${this.props.loggedIn.id}`

		const signedIn = (
			<div className="top-nav sign-in">
				<Link to={userProfile} className="user-photo" style={{ backgroundImage: `url(${userPic})` }} />
				<div className="user-name">{userName}</div>
				<NavLink to="/" onClick={() => this.logout()} className="logout-link">
					Log Out
				</NavLink>
			</div>
		)

		const noUser = (
			<div className="top-nav no-user">
				<NavLink to="/signup" className="signup-link">
					Sign Up
				</NavLink>
				<NavLink to="/login" className="login-link">
					Log In
				</NavLink>
			</div>
		)

		const lowerNav = (
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
		)

		return (
			<section className="header">
				<div className="top">
					<div className="left-side">
						<div className="logo-container">
							<img src={logo} alt="Geard Logo" />
						</div>
						{searchBar}
					</div>
					{this.props.loggedIn.email && signedIn}
					{!this.props.loggedIn.email && noUser}
				</div>
				<div className="bottom">{lowerNav}</div>
			</section>
		)
	}
}

export default container(Header)
