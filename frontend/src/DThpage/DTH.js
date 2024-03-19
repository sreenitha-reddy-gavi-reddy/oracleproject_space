import React, {useState} from "react";
import axios from "axios";
import {Row,Col,Form,Button,Card} from 'react-bootstrap';
const DTH = ()=>{
    const [formdata,setFormdata] = useState({
        'floornumber':'',
        'roomnumber':'',
        'DTHCompany':'',
        'CardNumber':'',
        'Rechargeon':'',
        'Rechargeexpired':'',
        'Remainder':'',
        'Remarks':'',
    })
    console.log(formdata);
    const handlesubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/api/add-dth', formdata)
        .then((res)=>{
            if(res.status===200){
                alert("Data Added Successfully")
            }
        })
    }
    return(
        <React.Fragment>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title>
                                    ADD
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form onSubmit={handlesubmit}>
                                            <Row>
                                                <Col md={4}>
                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
                                                    <Form.Label>Floor</Form.Label>
                                                    <Form.Control as="select" name="floornumber" onChange={(e)=>setFormdata({...formdata,floornumber:e.target.value})}>
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
                                                        <Form.Control type="text" placeholder="Enter Room Number" name="roomnumber" onChange={(e)=>setFormdata({...formdata,roomnumber:e.target.value})}/>
                                                    </Form.Group>
                                                </Col>
                                                    <Col md={4}>
                                                            
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
                                                        <Form.Label>DTH Company</Form.Label>
                                                        <Form.Control type="textarea" name="DTHCompany" onChange={(e)=>setFormdata({...formdata,DTHCompany:e.target.value})}>
                                                        </Form.Control>
                                                       </Form.Group>
                                                    </Col>  
                                            </Row>
                                            <Row>
                                                <Col md={4}>
                                                                        
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlSelect2">
                                                        <Form.Label>Card Number</Form.Label>
                                                        <Form.Control type="text"  name="CardNumber" onChange={(e) => setFormdata({...formdata, CardNumber:e.target.value})} />
                                                        </Form.Group>
                                               </Col>
                                               <Col md={4}>
                                                            
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlSelect2">
                                                        <Form.Label> Recharge on</Form.Label>
                                                        <Form.Control type="Date" placeholder="Enter Date" name="Rechargeon" onChange={(e) => setFormdata({...formdata, Rechargeon:e.target.value})} />
                                                        </Form.Group>
                                               </Col>
                                               <Col md={4}>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
                                                        <Form.Label>Recharge Expired on</Form.Label>
                                                        <Form.Control type="Date" name="Rechargeexpired" onChange={(e)=>setFormdata({...formdata,Rechargeexpired:e.target.value})}>
                                                        </Form.Control>
                                                        </Form.Group>
                                                                                                       
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={4}>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
                                                        <Form.Label>Remainder on</Form.Label>
                                                        <Form.Control type="Date" name="Remainder" onChange={(e)=>setFormdata({...formdata,Remainder:e.target.value})}>
                                                        </Form.Control>
                                                        </Form.Group>
                                                </Col>
                                                <Col md={8}>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
                                                        <Form.Label>Remarks</Form.Label>
                                                        <Form.Control as="textarea" placeholder="text" name="Remarks" onChange={(e)=>setFormdata({...formdata,Remarks:e.target.value})}>
                                                        </Form.Control>
                                                        </Form.Group>
                                                </Col>
                                            </Row>
                                            
                                            <Row>
                                                <Col sm={{ span: 6, offset: 5}}>
                                                        <Button variant="primary" type="submit">ADD</Button>
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
export default DTH;