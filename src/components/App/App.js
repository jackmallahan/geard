import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Header from '../Header/Header'
import SignUpContainer from '../SignUp/SignUpContainer'
import AddGearContainer from '../AddGear/AddGearContainer'
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
				<Route exact path="/signup" component={SignUpContainer} />
				<Route exact path="/addgear" component={AddGearContainer} />
			</div>
		)
	}
}

export default App
