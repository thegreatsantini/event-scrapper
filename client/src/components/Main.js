import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import EventBright from './TabsComponents/EventBright';
import MeetUp from './TabsComponents/MeetUp';
import Stanford from './TabsComponents/Stanford';
import Home from './Home'

class NavLinks extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/stanford' component={Stanford} />
                <Route path='/eventbright' component={EventBright} />
                <Route path='/meetup' component={MeetUp} />
            </Switch>
        );
    }
}


export default NavLinks