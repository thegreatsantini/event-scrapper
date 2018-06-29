import React, { Component } from 'react';
import axios from 'axios';

class EventBright extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [],
            error: false
        }
    }

    componentDidMount = () => {
        axios.get('http://localhost:8080/api/v1/eventbright/')
            .then((response) => {
                response.data.forEach(item => {
                    this.setState({ events: [...this.state.events, item] })

                });
                // console.log(response.data);
            })
            .catch( (error) => {
                console.log(error)
                this.setState({
                    error: true,
                })
            }).then(()=>{
                console.log(this.state.error)
            })
    }

    render() {
        if ( this.state.error ) {
            return (
                <div>
                Captcha Required :(
                </div>
            )
        }
            return (
                <div>
                    Here is event brights info
            </div>
            );
        
    }
}


export default EventBright;