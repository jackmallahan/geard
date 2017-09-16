import React, { Component } from 'react'
import firebase from '../../utils/Firebase'

class AddGear extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			activity: '',
			price: '',
			owner: 'Jack'
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(e) {
		this.setState({
			[e.target.className]: e.target.value
		})
	}

	handleSubmit(e) {
		const gearRef = firebase.database().ref('gear')
		const gear = {
			name: this.state.name,
			activity: this.state.activity,
			price: this.state.price,
			owner: this.state.owner
		}
		gearRef.push(gear)
		this.props.addGear(gear)
		this.setState({
			name: '',
			activity: '',
			price: '',
			currentUser: ''
		})
	}

	render() {
		console.log('this.props in addGear', this.props)
		return (
			<div className="sign-up">
				<form
					onSubmit={e => {
						e.preventDefault()
						this.handleSubmit()
					}}
				>
					<input
						className="name"
						type="text"
						placeholder="Gear Name"
						onChange={this.handleChange}
						value={this.state.userName}
					/>
					<input
						className="activity"
						type="text"
						placeholder="Activity"
						onChange={this.handleChange}
						value={this.state.activity}
					/>
					$<input
						className="price"
						placeholder="0"
						type="number"
						min="0.01"
						step="0.01"
						onChange={this.handleChange}
						value={this.state.price}
					/>
					<input type="submit" />
				</form>
			</div>
		)
	}
}

export default AddGear
