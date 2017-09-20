import React from 'react'
import container from '../../container/index'
import './GearCard.css'

const GearCard = ({ activity, name, price, owner, id, remove, removeGear, confirm, showConfirm, clicked, photo }) => {
	return (
		<article className="gear-card" id={id}>
			<div className="gear-image" style={{ backgroundImage: `url(${photo})` }} />
			<div className="gear-info">
				<h3>{name}</h3>
				<h5>{activity}</h5>
				<p>${price}</p>
				{clicked && <div onClick={() => confirm(id)}>{remove}</div>}
			</div>
			{showConfirm && (
				<div>
					Are you Sure? <span onClick={() => removeGear(id)}>Yes / </span>No
				</div>
			)}
		</article>
	)
}

export default container(GearCard)
