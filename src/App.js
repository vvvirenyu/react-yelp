import React from 'react';
import { Component } from 'react'
import Search from './components/search'
import Results from './components/Results'
import SideList from './components/sideList'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: {},
      savedList: []
    };
  }

  updateState(newPlaces) {
    // console.log(newPlaces);
    this.setState({
      results: newPlaces
    });
    console.log(this.state.results);
  }

  updateSavedList(nameOfPlace) {
    const place = this.state.savedList.concat([nameOfPlace]);
    this.setState({
      savedList: place
    });
  }

  removeSavedList(nameOfPlace) {
    var array = this.state.savedList;
    var index = array.indexOf(nameOfPlace);
    delete array[index];
    this.setState({
      savedList: array
    });
    console.log(this.state.savedList);
  }
  render() {
    return (
      <Router>
        <div className="container">
            <div className="left-div" >
              {/* <NavBar /> */}
              <Search callUpdate={this.updateState.bind(this)} />
              <Results resultPlaces={this.state.results}
                updateSavedList={this.updateSavedList.bind(this)} />
            </div>
            <div className="right-div" >
              <SideList savedList={this.state.savedList}
                updatedList={this.removeSavedList.bind(this)} />
            </div>
        </div>
      </Router>
    );
  }
}

export default App;

