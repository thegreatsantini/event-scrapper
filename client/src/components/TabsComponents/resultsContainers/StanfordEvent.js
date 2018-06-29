import React, { Component } from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';

const cardStyle = {
    padding: '10px',
    width: '500px',
    height: '200px'
}

class StanfordEvents extends Component {
    render() {
        let events = this.props.events.map((item, i) => {
            return (
                    <Col key={i} sm="6">
                        <Card style={cardStyle} body>
                            <CardTitle>{item.title}</CardTitle>
                            <hr />
                            <CardText>When: {item.meetingTime}</CardText>
                        </Card>
                    </Col>
            )
        })
        return (
            <Row style={{padding: '10px'}} >
                {events}
            </Row>
        );
    }
}


export default StanfordEvents;