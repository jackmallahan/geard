import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import Login from '../Login/Login'
import AddGear from '../AddGear/AddGear'
import CardIndex from '../CardIndex/CardIndex'
import Profile from '../Profile/Profile'
import container from '../../container/index'
import { auth } from '../../utils/Firebase'

class App extends Component {
	constructor() {
		super()
		this.state = {
			where: '',
			when: ''
		}
	}

	componentDidMount() {
		auth.onAuthStateChanged(user => {
			if (user && !user.name) {
				// this.props.emailLogin({
				//
				// })
			}
			if (user) {
				console.log('user in CDM', user)
				this.props.login({
					name: user.displayName,
					email: user.email,
					id: user.uid,
					pic: user.photoURL
				})
			}
		})
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Route exact path="/" component={CardIndex} />
				<Route exact path="/signup" component={SignUp} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/profile/:id" component={Profile} />
				<Route exact path="/addgear" component={AddGear} />
			</div>
		)
	}
}

export default container(App)
