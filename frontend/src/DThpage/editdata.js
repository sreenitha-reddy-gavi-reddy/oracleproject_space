import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Card, Button,Form} from 'react-bootstrap';
//import { Link } from 'react-router-dom';
const Editdata = () =>{
    const[formdata,setFormdata]=useState({
        'floornumber':'',
        'roomnumber':'',
        'DTHCompany':'',
        'CardNumber':'',
        'Rechargeon':'',
        'Rechargeexpired':'',
        'Remainder':'',
        'Remarks':''
    })
    const {id}=useParams();
    console.log(id);
    useEffect(()=>{
        axios.get('http://localhost:5000/api/get-single-dth/'+id).then((res)=>{console.log(res.data.response)
        setFormdata(res.data.response);
    })
    .catch(err=>{console.log(err)})
    },[]);
    const handlesubmit=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:5000/api/update-dth/${id}`, formdata).then((res)=>{
            alert("Updated Sucessfully"); 
                console.log(res.data);
                window.location.replace(
                   "http://localhost:3000/DThpage/getdata"
                  );
        })
    }
    return(
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">DTH EDIT FORM</Card.Title> 
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handlesubmit}>
                                <Row>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Floor</Form.Label>
                                    <Form.Control as="select" name="floornumber" value={formdata.floornumber} onChange={(e)=>setFormdata({...formdata,floornumber:e.target.value})}>
                                    <option>select Floor</option>
                                    <option>1ST Floor</option>
                                    <option>2ND Floor</option>
                                    <option>3RD Floor</option>
                                    </Form.Control>
                                    </Form.Group>   
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Enter Room Number</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Room Number" name="roomnumber" value={formdata.roomnumber} onChange={(e)=>setFormdata({...formdata,roomnumber:e.target.value})}/>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
                                    <Form.Label>DTH Company</Form.Label>
                                    <Form.Control type="textarea" name="DTHCompany" value={formdata.DTHCompany} onChange={(e)=>setFormdata({...formdata,DTHCompany:e.target.value})}>
                                    </Form.Control>
                                    </Form.Group>
                                </Col> 
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlSelect2">
                                    <Form.Label>Card Number</Form.Label>
                                    <Form.Control type="text"  name="CardNumber" value={formdata.CardNumber} onChange={(e) => setFormdata({...formdata, CardNumber:e.target.value})} />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlSelect2">
                                    <Form.Label> Recharge on</Form.Label>
                                    <Form.Control type="Date" placeholder="Enter Date" name="Rechargeon" value={formdata.Rechargeon} onChange={(e) => setFormdata({...formdata, Rechargeon:e.target.value})} />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Recharge Expired on</Form.Label>
                                    <Form.Control type="Date" name="Rechargeexpired" value={formdata.Rechargeexpired} onChange={(e)=>setFormdata({...formdata,Rechargeexpired:e.target.value})}>
                                    </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Remainder on</Form.Label>
                                    <Form.Control type="Date" name="Remainder" value={formdata.Remainder} onChange={(e)=>setFormdata({...formdata,Remainder:e.target.value})}>
                                    </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col md={8}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Remarks</Form.Label>
                                    <Form.Control as="textarea" placeholder="text" name="Remarks" value={formdata.Remarks} onChange={(e)=>setFormdata({...formdata,Remarks:e.target.value})}>
                                    </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={{ span: 6, offset: 5}}>
                                    <Button variant="primary" onClick={handlesubmit}>update</Button>
                                </Col>
                            </Row>
                            </Form>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
 }
 export default Editdata;