import React, { Component } from 'react'
import { Route, NavLink, Link } from 'react-router-dom'
import logo from '../../assets/carabiner.png'
import './Header.css'

class Header extends Component {
	render() {
		return (
			<section className="header">
				<div className="top">
					<div className="left-side">
						<div className="logo-container">
							<img src={logo} alt="Geard Logo" />
						</div>
						<form>
							<input placeholder="where" />
							<input placeholder="when" />
							<input type="submit" />
						</form>
					</div>
					<div className="top-nav">
						<NavLink to="/signup" className="signup-link">
							Sign Up
						</NavLink>
						<NavLink to="/login" className="login-link">
							Login
						</NavLink>
					</div>
				</div>
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
			</section>
		)
	}
}

export default Header