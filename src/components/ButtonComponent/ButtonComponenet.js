import React, { Component } from 'react'

export default class Button extends Component {
	render() {
		return (
			<button
				className="ActionButtons"
				id={this.props.id}
				disabled={this.props.disabled}
				onClick={this.props.handleClick}
			>
				{this.props.text}
			</button>
		)
	}
}
