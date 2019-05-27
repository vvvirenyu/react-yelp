import React from 'react';
import {Component} from 'react'
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Search from './components/search'
import Results from './components/Results'
import SideList from './components/sideList'


class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			results:{},
			savedList:[]
		};
	}

	updateState(newPlaces){
		this.setState({
			results:newPlaces			
		});
	}

	updateSavedList(nameOfPlace){
		const place = this.state.savedList.concat([nameOfPlace]);
		this.setState({
			savedList:place
		});
	}
    render() {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Search callUpdate = {this.updateState.bind(this)}/>
              <Results resultPlaces = {this.state.results}						
                  updateSavedList = {this.updateSavedList.bind(this)}/>
            </div>
            <div className="col-md-4">
              <SideList savedList = {this.state.savedList}/>
            </div>
          </div>  
        </div>      
    );
  }
}

export default App;