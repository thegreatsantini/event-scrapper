import React, { Component } from 'react';
import { NavLink } from 'reactstrap';
import '../nav.css'

class MyNav extends Component {
    render() {
        return (
            <div className="App">
                    <h1>View Events</h1>
                <div className="App-intro">
                    <ul className="header">
                        <li><NavLink href="/">Home</NavLink></li>
                        <li><NavLink href="/stanford">Stanford</NavLink></li>
                        <li><NavLink href="/eventbright">Event Bright</NavLink></li>
                        <li><NavLink href="/meetup">Meetup</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
}


export default MyNav;