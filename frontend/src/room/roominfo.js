import React, { useState } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const RoomInfo = () => {
    const [formdata, setFormdata] = useState({
        'floornumber': '',
        'roomnumber': '',
        'roomtype': '',
        'remarks': '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/adduser-room', formdata)
            .then((res) => {
                console.log(res.data);
                if (res.status === 200) {
                    alert("Success");
                    window.location.reload();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle error here
            });
    }

    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">ADD</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col md={4}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Floor</Form.Label>
                                            <Form.Control as="select" name="floornumber" onChange={(e) => setFormdata({ ...formdata, floornumber: e.target.value })}>
                                                <option>Select</option>
                                                <option>1st Floor</option>
                                                <option>2nd Floor</option>
                                                <option>3rd Floor</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Enter Room Number</Form.Label>
                                            <Form.Control type="text" placeholder="Enter roomnumber" name="roomnumber" onChange={(e) => setFormdata({ ...formdata, roomnumber: e.target.value })} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Type Of Room</Form.Label>
                                            <Form.Control as="select" name="roomtype" onChange={(e) => setFormdata({ ...formdata, roomtype: e.target.value })}>
                                                <option>Select</option>
                                                <option>Suite Room</option>
                                                <option>Executive Room</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Remarks</Form.Label>
                                            <Form.Control as="textarea" name="remarks" onChange={(e) => setFormdata({ ...formdata, remarks: e.target.value })} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={{ span: 6, offset: 5 }}>
                                        <Button variant="primary" type="submit">Add</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default RoomInfo;
