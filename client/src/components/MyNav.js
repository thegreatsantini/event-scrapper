import React, { Component } from 'react';
import { NavLink } from 'reactstrap';
// import {
//     NavLink,

//   } from "react-router-dom";
class MyNav extends Component {
    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    <h1>View Events</h1>
                    <ul className="header">
                        <li><NavLink href="/">Home</NavLink></li>
                        <li><NavLink href="/stanford">Stanford</NavLink></li>
                        <li><NavLink href="/eventbright">Event Bright</NavLink></li>
                        <li><NavLink href="/meetup">Meetup</NavLink></li>
                    </ul>
                </p>
            </div>
        );
    }
}


export default MyNav;