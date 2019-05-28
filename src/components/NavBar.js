import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SideList from '../components/sideList'
import Search from '../components/search'


export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mr-auto">
                        <li><Link to={'/'} className="nav-link"> Home </Link></li>
                        <li><Link to={'/saved'} className="nav-link"> Favorites </Link></li>
                    </ul>
                </nav>
                <hr />
                <Switch>
                    <Route exact path='/' component={Search} />
                    <Route path='/saved' component={SideList} />
                </Switch>
            </div>
        )
    }
}
