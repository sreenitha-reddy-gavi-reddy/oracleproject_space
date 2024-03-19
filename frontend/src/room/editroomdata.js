import React, { useState, useEffect } from 'react'; // Added import for useEffect
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditroomInfo = () => {
    const [formdata, setFormdata] = useState({
        'floornumber': '',
        'roomnumber': '',
        'roomtype': '',
        'remarks': '',
    });

    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        axios.get('http://localhost:5000/api/getsingle-user/' + id).then((res) => { console.log(res.data.response)
            setFormdata(res.data.response);
        })
        .catch(err => { console.log(err) });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:1000/api/updateuser/${id}`, formdata)
            .then((res) => { 
                alert("Updated Sucessfully"); 
                console.log(res.data);
                window.location.replace(
                   "http://localhost:3001/room/getroomdata"
                  );
            })
            .catch((error) => {
                console.error('Error updating user:', error);
            });
    };
    
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
                                            <Form.Control as="select" name="floornumber" value={formdata.floornumber} onChange={(e) => setFormdata({ ...formdata, floornumber: e.target.value })}>
                                                <option>select</option>
                                                <option>1st Floor</option>
                                                <option>2nd Floor</option>
                                                <option>3rd Floor</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Enter Room Number</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Room Number" name="roomnumber" value={formdata.roomnumber} onChange={(e) => setFormdata({ ...formdata, roomnumber: e.target.value })} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Type Of Room</Form.Label>
                                            <Form.Control as="select" name="roomtype" value={formdata.roomtype} onChange={(e) => setFormdata({ ...formdata, roomtype: e.target.value })}>
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
                                            <Form.Control as="textarea" name="remarks" value={formdata.remarks} onChange={(e) => setFormdata({ ...formdata, remarks: e.target.value })} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={{ span: 6, offset: 5 }}>
                                        <Button variant="primary" type="submit">update</Button>
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

export default EditroomInfo;
