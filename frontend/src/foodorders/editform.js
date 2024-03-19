import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";
const EditForm = () =>{
    const[formdata,setFormdata]=useState({
        'guest':'',
        'reference':'',
        'dates':'',
        'veglunch':'',
        'nonveglunch':'',
        'tea':'',
        'team':'',
        'vegdinner':'',
        'dinnerquantity':'',
        'visit':'',
        'text':'',
        'breakfast':'',
        'nvmenu':'',
        'snacks':'',
        'coffee':'',
        'nvdinner':'',
    })
    //console.log(formdata);
    const {id}=useParams();
    console.log(id);
    useEffect(()=>{
        axios.get('http://localhost:5000/api/get-single-user/'+id).then((res)=>{console.log(res.data.response)
            setFormdata(res.data.response);
        })
        .catch(err=>{console.log(err)})
    },[]);
    const handlesubmit=(e)=>{
        e.preventDefault();
        axios.put('http://localhost:5000/api/update-user/'+id, {formdata}).then((res)=>{alert(res.data.msg)})
        window.location.replace(
            "http://localhost:3000/orderlist"
           );
    }
    
    return(
        <React.Fragment>
            <Row>
                <Col sm-12>
                    <Card>
                        <Card.Header>
                        <Card.Title as="h5">New Order</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={6}>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Guest Details</Form.Label>
                                            <Form.Control as="textarea" name='guest' rows="3" value={formdata.guest}  onChange={(e)=>setFormdata({...formdata,guest:e.target.value})}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Reference</Form.Label>
                                            <Form.Control type="text" placeholder="Text" name='reference' value={formdata.reference} onChange={(e)=>setFormdata({...formdata,reference:e.target.value})}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlDate">
                                            <Form.Label>Date</Form.Label>
                                            <Form.Control type="date" placeholder="Enter Date" name='dates' value={formdata.dates} onChange={(e)=>setFormdata({...formdata,dates:e.target.value})}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                            <Form.Label>Veg Lunch</Form.Label>
                                            <Form.Control type="number" name='veglunch' placeholder="Veg Lunch" value={formdata.veglunch} onChange={(e)=>setFormdata({...formdata,veglunch:e.target.value})}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                            <Form.Label> Non-Veg Lunch Quantity</Form.Label>
                                            <Form.Control type="number" name='nonveglunch' value={formdata.nonveglunch} onChange={(e)=>setFormdata({...formdata,nonveglunch:e.target.value})}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                            <Form.Label>Tea</Form.Label>
                                            <Form.Control type="number" name='tea' value={formdata.tea} onChange={(e)=>setFormdata({...formdata,tea:e.target.value})}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                            <Form.Label>Veg Dinner</Form.Label>
                                            <Form.Control type="number" name='vegdinner' value={formdata.vegdinner} onChange={(e)=>setFormdata({...formdata,vegdinner:e.target.value})}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                            <Form.Label>Non-Veg Dinner Quantity</Form.Label>
                                            <Form.Control type="number" name='dinnerquantity' value={formdata.dinnerquantity} onChange={(e)=>setFormdata({...formdata,dinnerquantity:e.target.value})}/>
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col md={6}>
                                    <Form>
                                       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Purpose of Visit</Form.Label>
                                            <Form.Control as="textarea"  name='visit' rows="3" value={formdata.visit} onChange={(e)=>setFormdata({...formdata,visit:e.target.value})}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Team Size</Form.Label>
                                            <Form.Control type="text" placeholder="Team Size" name='team' value={formdata.team} onChange={(e)=>setFormdata({...formdata,team:e.target.value})}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                            <Form.Label>Breakfast</Form.Label>
                                            <Form.Control type="number" placeholder="Breakfast" name='breakfast' value={formdata.breakfast} onChange={(e)=>setFormdata({...formdata,breakfast:e.target.value})}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Non-Veg Lunch Menu</Form.Label>
                                            <Form.Control as="select" name='nvmenu' value={formdata.nvmenu} onChange={(e)=>setFormdata({...formdata,nvmenu:e.target.value})}>
                                                <option>Select...</option>
                                                <option>Lunch-1 NV Biryani</option>
                                                <option>Lunch-2 NV Biryani</option>
                                                <option>Lunch-3 NV Biryani</option>
                                                <option>Lunch-4 NV Biryani</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                            <Form.Label>Snacks</Form.Label>
                                            <Form.Control type="number" name='snacks'  value={formdata.snacks} onChange={(e)=>setFormdata({...formdata,snacks:e.target.value})}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                            <Form.Label>Coffee</Form.Label>
                                            <Form.Control type="number" name='coffee' value={formdata.coffee} onChange={(e)=>setFormdata({...formdata,coffee:e.target.value})}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Non-Veg Dinner Type</Form.Label>
                                            <Form.Control as="select" name='nvdinner' value={formdata.nvdinner} onChange={(e)=>setFormdata({...formdata,nvdinner:e.target.value})}>
                                                <option>Select...</option>
                                                <option>Lunch-1 NV Biryani</option>
                                                <option>Lunch-2 NV Biryani</option>
                                                <option>Lunch-3 NV Biryani</option>
                                                <option>Lunch-4 NV Biryani</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                            <Row>
                                <Col md-12>
                                    <label>Additional Items</label>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={{span:6,offset:5}}>
                                    <Button variant='primary' onClick={handlesubmit}>Update</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}
export default EditForm;