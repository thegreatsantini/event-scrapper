import React, { Component } from 'react';
import axios from 'axios';
import StandfordEvents from './resultsContainers/StanfordEvent'

class Standford extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [],
        }
    }

    componentDidMount = () => {
        axios.get('http://localhost:8080/api/stanford/')
            .then( (response)=> {
                response.data.forEach( item => {
                    this.setState({ events: [...this.state.events, item] })
                    
                });
                // console.log(response.data);
            }).then(()=>{
                console.log(this.state.events)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                <StandfordEvents events={this.state.events} />
            </div>
        );
    }
}


export default Standford;