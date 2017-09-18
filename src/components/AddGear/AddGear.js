import React, { Component } from 'react'
import firebase from '../../utils/Firebase'
import container from '../../container/index'
import './AddGear.css'

class AddGear extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			activity: '',
			price: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit(e) {
		const gearRef = firebase.database().ref('gear')
		const gear = {
			name: this.state.name,
			activity: this.state.activity,
			price: this.state.price,
			owner: this.props.loggedIn
		}
		gearRef.push(gear)
		this.props.addGear(gear)
		this.setState({
			name: '',
			activity: '',
			price: ''
		})
	}

	render() {
		return (
			<div id="addGear" className="add-gear-container">
				<div className="add-gear-content sign-up">
					<form
						onSubmit={e => {
							this.handleSubmit()
						}}
					>
						<input
							name="name"
							type="text"
							placeholder="Gear Name"
							onChange={this.handleChange}
							value={this.state.userName}
						/>
						<input
							name="activity"
							type="text"
							placeholder="Activity"
							onChange={this.handleChange}
							value={this.state.activity}
						/>
						$<input
							name="price"
							placeholder="0"
							type="number"
							min="0.00"
							step="0.25"
							onChange={this.handleChange}
							value={this.state.price}
						/>
						<input type="submit" />
					</form>
				</div>
			</div>
		)
	}
}

export default container(AddGear)
