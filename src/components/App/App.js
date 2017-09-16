import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import AddGear from '../AddGear/AddGear'
import CardIndex from '../CardIndex/CardIndex'
import container from '../../container/index'
import Firebase, { auth } from '../../utils/Firebase'

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
			if (user) {
				console.log('user in CDM', user)
				this.props.login({ name: user.displayName, email: user.email, id: user._lat })
			}
		})
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Route exact path="/" component={CardIndex} />
				<Route exact path="/signup" component={SignUp} />
				<Route exact path="/login" component={SignUp} />
				<Route exact path="/addgear" component={AddGear} />
			</div>
		)
	}
}

export default container(App)
