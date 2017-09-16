import React from 'react'
import container from '../../container/index'

const GearCard = ({ activity, name, price, owner }) => {
	return (
		<article className="gear-card">
			<h3>{name}</h3>
			<h5>{activity}</h5>
			<p>${price}</p>
		</article>
	)
}

export default container(GearCard)
