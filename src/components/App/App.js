import React, { Component } from 'react'
import { Route, NavLink, Link } from 'react-router-dom'
import './App.css'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'

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
				<Route exact path="/signup" component={SignUp} />
			</div>
		)
	}
}

export default App
