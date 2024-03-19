import React ,{useState} from 'react';
import axios from 'axios';
import { Row, Col, Card, Form ,Button} from 'react-bootstrap';
const Maintain=()=>{
    const[formdata,setFormdata]=useState({
        'floor':'',
        'roomnumber':'',
        'roomtype':'',
        'work':'',
        'workstart':'',
        'workend':'',
        'state':'',
        'workdelay':''
    })
    console.log(formdata);
    const hsubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/api/add-repair', {formdata}).then((res)=>{
            if(res.status===200){
                alert("Data Added Successfully")
            }
        })
    }
    return(
        <React.Fragment>
            <Row>
                <Col md={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Repairs & Maintanance</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={4}>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Floor</Form.Label>
                                            <Form.Control as="select" name='floor' onChange={(e)=>setFormdata({...formdata,floor:e.target.value})}>
                                                <option>Select...</option>
                                                <option>1 Floor</option>
                                                <option>2 Floor</option>
                                                <option>3 Floor</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Room Number</Form.Label>
                                        <Form.Control type="text" name='roomnumber' placeholder="Large text" className="mb-3" onChange={(e)=>setFormdata({...formdata,roomnumber:e.target.value})}></Form.Control>
                                     </Form.Group>
                                </Col>
                                <Col md={4}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Type of Room</Form.Label>
                                    <Form.Control as="select" name='roomtype' onChange={(e)=>setFormdata({...formdata,roomtype:e.target.value})}>
                                        <option>Select...</option>
                                        <option>Suite Room</option>
                                        <option>Executive Room</option>
                                    </Form.Control>
                                </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Form>
                                    <Col md={12}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Work Information</Form.Label>
                                            <Form.Control as="textarea" rows="3" name='work' onChange={(e)=>setFormdata({...formdata,work:e.target.value})}></Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Form>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Work Started On</Form.Label>
                                            <Form.Control type="date" name='workstart' onChange={(e)=>setFormdata({...formdata,workstart:e.target.value})}></Form.Control>
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Work Completed On</Form.Label>
                                        <Form.Control type="date" name='workend' className="mb-3" onChange={(e)=>setFormdata({...formdata,workend:e.target.value})}></Form.Control>
                                     </Form.Group>
                                </Col>
                                <Col md={4}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Control as="select" name='state' onChange={(e)=>setFormdata({...formdata,state:e.target.value})}>
                                        <option>Select...</option>
                                        <option>Pending</option>
                                        <option>Completed</option>
                                    </Form.Control>
                                </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Form>
                                    <Col md={12}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>If Work Delay (mention reason)</Form.Label>
                                            <Form.Control as="textarea" rows="2" name='workdelay' onChange={(e)=>setFormdata({...formdata,workdelay:e.target.value})}></Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Form>
                            </Row>
                            <Row>
                                <Col md={{span:6,offset:5}}>
                                    <Button variant='primary' onClick={hsubmit}>ADD</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}
export default Maintain;