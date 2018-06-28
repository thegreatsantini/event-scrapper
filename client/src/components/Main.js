import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import EventBright from './resultsContainers/EventBright';
import MeetUp from './resultsContainers/MeetUp';
import Stanford from './resultsContainers/Stanford';

class NavLinks extends Component {
    render() {
        return (
            <Switch>
                {/* <Route exact path='/' component={Home} /> */}
                <Route path='/stanford' component={Stanford} />
                <Route path='/eventbright' component={EventBright} />
                <Route path='/meetup' component={MeetUp} />
            </Switch>
        );
    }
}


export default NavLinks