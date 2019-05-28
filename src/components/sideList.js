import React, { Component } from 'react';

export default class sideList extends Component {
	render() {
		if (this.props.savedList !== undefined){
		var savedList = this.props.savedList.map(name => {
			return (
				<div className="alert" key={name}>
					<button className="btn btn-xs btn-primary pull-right" onClick={() => this.props.updatedList(name)} > <i class="fas fa-frown"> </i> Remove from Favorites </button>
					<strong> {name} </strong>
				</div>
			)
		})}
		return (
			<ul>
				<h3>Favorite Places</h3>
				{savedList}
			</ul>
		)
	}
}