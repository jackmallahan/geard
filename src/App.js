import React, { Component } from 'react'
import { Route, NavLink, Link } from 'react-router-dom'
import CardIndex from '../CardIndex/CardIndex'
import Header from '../Header/Header'
import './App.css'

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
				<Route
					exact
					path="/"
					render={() => (
						<div>
							<Header />
							<CardIndex />
						</div>
					)}
				/>
			</div>
		)
	}
}

export default App
