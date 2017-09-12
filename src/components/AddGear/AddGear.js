import React, { Component } from 'react'
import firebase from '../../utils/Firebase'

class AddGear extends Component {
	constructor() {
		super()
		this.state = {
			name: '',
			activiy: '',
			price: '',
			currentUser: null,
			allGear: []
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
		this.props.postNewGear({
			name: this.state.name,
			activiy: this.state.activity,
			price: this.state.price
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
					<input name="name" placeholder="Gear Name" onChange={this.handleChange} value={this.state.userName} />
					<input name="activity" placeholder="Activity" onChange={this.handleChange} value={this.state.activity} />
					<p>$0</p>
					<input
						name="price"
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
