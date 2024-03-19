import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Row, Col, Card, Table } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
const OrderList=()=>{
    let [users,setUsers]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/api/get-user').then((response)=>{
            setUsers(response.data.users);
        });
    },[]);

    // const checkout = (id) => {
    //     axios.put('http://localhost:5000/api/updatecheckout/'+id).then((res)=>{
    //         console.log(res.data)
    //     })
    // }
    return(
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Check In List</Card.Title>
                            {/* <span className="d-block m-t-5">
                             use props <code>className=&quot;table-columned&quot;</code> with <code>Table</code> component</span> */}
                        </Card.Header>
                        <Card.Body>
                            <Table responsive className="table-columned text-center">
                                <thead>
                                    <th>S.no</th>
                                    <th>Name of the Person</th>
                                    <th>Name of the Company/Organisation</th>
                                    <th>Mobile Number</th>
                                    <th>Purpose of Visit</th>
                                    <th>From Date</th>
                                    <th>To Date</th>
                                    <th>No.of Days To Stay</th>
                                    <th>Place Came From</th>
                                    <th>Reference By</th>
                                    <th>Conformation Mode</th>
                                    <th>Room Assigned</th>
                                    <th>Remarks</th>
                                </thead>
                                <tbody>
                                        {Array.isArray(users) && users.map((ele,index)=>{
                                            return(
                                                <tr key={index}>
                                                    <td>{index+1}</td>
                                                    <td>{ele.personname}</td>
                                                    <td>{ele.organisation}</td>
                                                    <td>{ele.mobile}</td>
                                                    <td>{ele.visit}</td>
                                                    <td>{ele.fromdate}</td>
                                                    <td>{ele.todate}</td>
                                                    <td>{ele.stay}</td>
                                                    <td>{ele.place}</td>
                                                    <td>{ele.reference}</td>
                                                    <td>{ele.conformation}</td>
                                                    <td>{ele.room}</td>
                                                    <td>{ele.remarks}</td>
                                                    {/* <td>{ele.action}</td> */}
                                                    {/* <td><Button onClick={()=>checkout(ele._id)}>View</Button></td> */}
                                                </tr>
                                            )
                                        })}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}
export default OrderList;