import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import AddGear from '../AddGear/AddGear'
import CardIndex from '../CardIndex/CardIndex'

class App extends Component {
	constructor() {
		super()
		this.state = {
			where: '',
			when: ''
		}
	}
	render() {
		return (
			<div className="App">
				<Header />
				<Route exact path="/" component={CardIndex} />
				<Route exact path="/signup" component={SignUp} />
				<Route exact path="/addgear" component={AddGear} />
			</div>
		)
	}
}

export default App
