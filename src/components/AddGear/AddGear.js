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
			description: '',
			price: '',
			photo: '',
			clicked: false
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
			description: this.state.description,
			price: this.state.price,
			owner: this.props.loggedIn,
			photo: this.state.photo,
			clicked: false
		}
		gearRef.push(gear)
		this.props.addGear(gear)
		this.setState({
			name: '',
			activity: '',
			description: '',
			price: '',
			photo: '',
			clicked: false
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
						<h2>Add Gear</h2>
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
						<input
							name="description"
							type="text"
							placeholder="Description..."
							onChange={this.handleChange}
							value={this.state.description}
						/>
						<input
							name="price"
							placeholder="$0"
							type="number"
							min="0.00"
							onChange={this.handleChange}
							value={this.state.price}
						/>
						<input name="photo" placeholder="link to photo" onChange={this.handleChange} value={this.state.photo} />
						<input className="add-gear-btn" type="submit" />
					</form>
				</div>
			</div>
		)
	}
}

export default container(AddGear)
