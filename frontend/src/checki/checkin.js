import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Form, Button} from 'react-bootstrap';
import axios from 'axios';

const CheckIn = () => {
    const [formdata, setFormdata] = useState({
        'personname': '',
        'organisation': '',
        'mobile': '',
        'visit': '',
        'fromdate': '',
        'todate': '',
        'stay': '',
        'place': '',
        'reference': '',
        'conformation': '',
        'room': '',
        'remarks': '',
    });

    const [availableRoomsFiltered, setAvailableRoomsFiltered] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/get-user')
            .then((response) => {
                const occupiedRooms = response.data.users.map((user) => user.room);
                const availableRooms = ['F1','F2' ,'F3','F4', 'F5', 'S1', 'S2','S3','S4','S5','S6' ,'S7', 'S8', 'S9', 'T1', 'T2', 'T3', 'T4', 'T5' ,'T6', 'T7', 'T8', 'T9'];
                const filteredRooms = availableRooms.filter((room) => !occupiedRooms.includes(room));
                setAvailableRoomsFiltered(filteredRooms);
            })
            .catch((error) => {
                console.error('Error fetching rooms:', error);
            });
    }, []);

    const handlesubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/add-checkin', { formdata })
            .then((res) => {
                if (res.status === 200) {
                    alert("Data Added Successfully");
                    window.location.reload();
                }

            })
            .catch((error) => {
                console.error('Error adding data:', error);
            });
    };
    return(
        <React.Fragment> 
            <Row>
                <Col sm={12}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col md={4}>
                                    <Form> 
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Name of the Person</Form.Label>
                                        <Form.Control  className="mb-3" type="text" name='personname' value={formdata.personname} onChange={(e)=>setFormdata({...formdata,personname:e.target.value})}/>
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col md={4}>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Name of the Company/Organisation</Form.Label>
                                    <Form.Control   className="mb-3" type="text" name='organisation' value={formdata.organisation} onChange={(e)=>setFormdata({...formdata,organisation:e.target.value})}/>
                                    </Form.Group>
                                    </Form>
                                </Col>
                                <Col md={4}>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Mobile Number</Form.Label>
                                    <Form.Control   className="mb-3" type="number" name='mobile' value={formdata.mobile} onChange={(e)=>setFormdata({...formdata,mobile:e.target.value})}/>
                                    </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                            <Row>
                             <Col md={4}>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Purpose of Visit</Form.Label>
                                    <Form.Control className="mb-3" type="text" name='visit'value={formdata.visit} onChange={(e)=>setFormdata({...formdata,visit:e.target.value})}/>
                                    </Form.Group>
                                    </Form>
                             </Col>
                             <Col md={4}>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>From Date</Form.Label>
                                    <Form.Control className="mb-3" type="date" name='fromdate'value={formdata.fromdate} onChange={(e)=>setFormdata({...formdata,fromdate:e.target.value})}/>
                                    </Form.Group>
                                    </Form>
                             </Col>
                             <Col md={4}>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>To Date</Form.Label>
                                    <Form.Control className="mb-3" type="date" name='todate'value={formdata.todate} onChange={(e)=>setFormdata({...formdata,todate:e.target.value})}/>
                                    </Form.Group>
                                    </Form>
                             </Col>
                            </Row>
                            <Row>
                             <Col md={4}>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>No.of Days To Stay</Form.Label>
                                    <Form.Control   className="mb-3" placeholder="days" type="text" name='stay'value={formdata.stay} onChange={(e)=>setFormdata({...formdata,stay:e.target.value})}/>
                                    </Form.Group>
                                    </Form>
                             </Col>
                             <Col md={4}>
                             <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Place Came From</Form.Label>
                                <Form.Control type="text" className="mb-3" name='place'value={formdata.place} onChange={(e)=>setFormdata({...formdata,place:e.target.value})}></Form.Control>
                                
                                
                                </Form.Group>
                                </Form>
                             </Col>
                             <Col md={4}>
                             <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Reference By</Form.Label>
                                <Form.Control   className="mb-3" type="text" name='reference'value={formdata.reference} onChange={(e)=>setFormdata({...formdata,reference:e.target.value})}/>
                                </Form.Group>
                                </Form>
                             </Col>
                             <Col md={4}>
                             <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Conformation Mode</Form.Label>
                                <Form.Control   className="mb-3" type="text" name='conformation' value={formdata.conformation} onChange={(e)=>setFormdata({...formdata,conformation:e.target.value})}/>
                                </Form.Group>
                                </Form>
                            </Col>
                            <Col md={4}>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Room Assigned</Form.Label>
                                <Form.Control  as="select" className="mb-3" name='room'value={formdata.room} onChange={(e)=>setFormdata({...formdata,room:e.target.value})}>
                                <option>select</option>
                                {availableRoomsFiltered.map((room, index) => (
                                    <option key={index} value={room}>{room}</option>
                                ))}
                                </Form.Control>
                                </Form.Group>
                                </Form>
                            </Col>  
                            <Col md={12}>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Remarks</Form.Label>
                                    <Form.Control size="lg" className="mb-3" rows="3" type="text" name='remarks'value={formdata.remarks} onChange={(e)=>setFormdata({...formdata,remarks:e.target.value})}/>
                                    </Form.Group> 
                                    </Form>
                                </Col>
                                <Col sm={{ span: 6, offset: 5}}>
                                <Button variant="primary" onClick={handlesubmit}>ADD</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
     </React.Fragment>
    );
};
export default CheckIn;