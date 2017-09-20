import React, { Component } from 'react'
import firebase from '../../utils/Firebase'
import container from '../../container/index'
import GearCard from '../GearCard/GearCard'
import './CardIndex.css'

class CardIndex extends Component {
	componentDidMount() {
		const gearRef = firebase.database().ref('gear')
		gearRef.on('value', snapshot => {
			console.log('snapshot val', snapshot.val())
			let gearObj = snapshot.val()
			let keys = Object.keys(gearObj)
			let gear = []
			for (let i = 0; i < keys.length; i++) {
				gear[i] = gearObj[keys[i]]
				gear[i].id = keys[i]
			}
			this.props.getAllGear(gear)
		})
	}

	render() {
		const gearArray = this.props.gear || []
		const gearInfo = gearArray.map((gear, index) => <GearCard key={gear.id} {...gear} />)
		return <div className="card-index">{gearInfo}</div>
	}
}

export default container(CardIndex)
