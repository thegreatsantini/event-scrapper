import React, { Component } from 'react';
import axios from 'axios';

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
                Here is Standford info
            </div>
        );
    }
}


export default Standford;