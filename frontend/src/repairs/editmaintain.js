import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import { Row, Col, Card, Form ,Button} from 'react-bootstrap';
import { useParams } from "react-router-dom";
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
    const {id}=useParams();
    useEffect(()=>{
        axios.get('http://localhost:5000/api/get-single-repair/'+id).then((res)=>{console.log(res.data)
            setFormdata(res.data.response);
        })
        .catch(err=>{console.log(err)})
    },[]);
    const handlesubmit=(e)=>{
        e.preventDefault();
        axios.put('http://localhost:5000/api/update-repair/:id'+id, {formdata}).then((res)=>{alert(res.data.msg)})
    }
    // console.log(formdata);
    // const hsubmit=(e)=>{
    //     e.preventDefault();
    //     axios.post('http://localhost:5000/api/add-repair', {formdata}).then((res)=>{
    //         if(res.status===200){
    //             alert("Data Added Successfully")
    //         }
    //     })
    // }
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
                                            <Form.Control as="select" name='floor' value={formdata.floor} onChange={(e)=>setFormdata({...formdata,floor:e.target.value})}>
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
                                        <Form.Control type="text" name='roomnumber' placeholder="Large text" className="mb-3" value={formdata.roomnumber} onChange={(e)=>setFormdata({...formdata,roomnumber:e.target.value})}></Form.Control>
                                     </Form.Group>
                                </Col>
                                <Col md={4}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Type of Room</Form.Label>
                                    <Form.Control as="select" name='roomtype' value={formdata.roomtype} onChange={(e)=>setFormdata({...formdata,roomtype:e.target.value})}>
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
                                            <Form.Control as="textarea" rows="3" name='work' value={formdata.work} onChange={(e)=>setFormdata({...formdata,work:e.target.value})}></Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Form>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Work Started On</Form.Label>
                                            <Form.Control type="date" name='workstart' value={formdata.workstart} onChange={(e)=>setFormdata({...formdata,workstart:e.target.value})}></Form.Control>
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Work Completed On</Form.Label>
                                        <Form.Control type="date" name='workend' className="mb-3" value={formdata.workend} onChange={(e)=>setFormdata({...formdata,workend:e.target.value})}></Form.Control>
                                     </Form.Group>
                                </Col>
                                <Col md={4}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Control as="select" name='state' value={formdata.state} onChange={(e)=>setFormdata({...formdata,state:e.target.value})}>
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
                                            <Form.Control as="textarea" rows="2" name='workdelay' value={formdata.workdelay} onChange={(e)=>setFormdata({...formdata,workdelay:e.target.value})}></Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Form>
                            </Row>
                            <Row>
                                <Col md={{span:6,offset:5}}>
                                    <Button variant='primary' onClick={handlesubmit}>ADD</Button>
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