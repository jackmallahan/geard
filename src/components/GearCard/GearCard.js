import React from 'react'
import container from '../../container/index'
import './GearCard.css'

const GearCard = ({ activity, name, price, owner, id }) => {
	return (
		<article className="gear-card" id={id}>
			<div className="gear-image" />
			<div className="gear-info">
				<h3>{name}</h3>
				<h5>{activity}</h5>
				<p>${price}</p>
			</div>
		</article>
	)
}

export default container(GearCard)
