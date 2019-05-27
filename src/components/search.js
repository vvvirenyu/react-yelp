import React,{Component} from 'react';
import axios from 'axios'

class search extends Component{

	getKey(e){
		e.preventDefault();
		const searchText = this.refs.inputText.value;
		const update = this.props;

		axios.post('http://localhost:3001/getLocations', {
            city: searchText
        })
		.then(function (response) {
			update.callUpdate(response.data.data);
		})
		.catch(function (error) {
			console.log(error);
		});		
	}

	render(){
			return (
				<form className="form-horizontal">
					<fieldset>
						<legend>Search Nearby Places</legend>
						<div className="col-md-10">									
							<div className="form-group">
								<label htmlFor="inputEmail" className="col-lg-2 control-label">Place</label>
								<div className="col-lg-10">
									<input type="text" className="form-control" id="inputEmail" ref='inputText'/>
								</div>							
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

export default search;