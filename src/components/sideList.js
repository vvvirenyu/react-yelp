import React,{Component} from 'react';

class sideList extends Component{
	render(){
		var savedList = this.props.savedList.map(name =>{
			return(
				<div className="alert" key={name}>
					<button className="btn btn-xs btn-primary pull-right">Click for more info</button>
					<strong>{name}</strong>
				</div>
			)
		})

		return (
			<ul>
				<h3>Saved Places</h3>
				{savedList}
			</ul>
		)
	}
}

export default sideList;