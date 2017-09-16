import React, { Component } from 'react'
import firebase from '../../utils/Firebase'
import container from '../../container/index'
import GearCard from '../GearCard/GearCard'

class CardIndex extends Component {
	componentDidMount() {
		const gearRef = firebase.database().ref('gear')
		gearRef.on('value', snapshot => {
			let gearObj = snapshot.val()
			const keys = Object.keys(gearObj)
			let gear = []
			for (let i = 0; i < keys.length; i++) {
				gear[i] = gearObj[keys[i]]
				gear[i].id = keys[i]
			}
			this.props.getAllGear(gear)
		})
	}

	render() {
		console.log('this.props', this.props)
		const gearArray = this.props.gear || []
		const gearInfo = gearArray.map((gear, index) => <GearCard key={gear.id} {...gear} index={index} />)
		return <div>{gearInfo}</div>
	}
}

export default container(CardIndex)
