import React, { Component } from 'react';
import axios from 'axios'

export default class search extends Component {

	getKey(e) {
		e.preventDefault();
		const searchText = this.refs.inputText.value;
		const update = this.props;

		// axios.post('http://localhost:3001/getLocations', {
		//     businesses: searchText
		// })
		fetch("https://corsanywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + searchText,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json', 'Authorization': 'Bearer rtNRtupZZTzmapVn603RDquqLl7Rmcy2uCFDFHccjBH-iCsSyAvA--1nJZO7KeFZUz3yTZWGlQadHDVSeSCitGHCdUHnyrAeHx-OvNhYcBFtG-c9f6EuFJF-mvTqXHYx',
				}
			})
			.then((res) => { return res.json() })
			// .then((json) => {return json.businesses;})
			// .then((jsonb) => {jsonb.map((value)=>{
			//     console.log(value);
			//     return value;
			// });})
			// .then((response)=> {
			//     console.log('response', response);
			// })
			.then(function (response) {
				// console.log(response);
				update.callUpdate(response);
				// console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	render() {
		return (
			<form className="form-horizontal">
				<fieldset>
					<h2>Search nearby places</h2>
					<div className="form-group">
						<label htmlFor="inputEmail" className="col-lg-2 control-label">Location</label>
						<div className="col-lg-10">
							<input type="text" className="form-control" id="inputEmail" ref='inputText' />
						</div>
					</div>
					<div className="col-md-2">
						<button className="btn btn-success" onClick={this.getKey.bind(this)}>Search</button>
					</div>
				</fieldset>
			</form>
		)
	}
}