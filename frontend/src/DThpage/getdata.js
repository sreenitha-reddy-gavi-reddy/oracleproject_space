import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Card, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Getdata = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/get-dth')
            .then((response) => {
                setUsers(response.data.users);
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
            });
    }, []);

    const deleteUser = (id) => {
        axios.delete(`http://localhost:5000/api/delete-dth/${id}`)
            .then((res) => {
                console.log(res);
                alert("Data deleted successfully");
                window.location.reload();
            })
            .catch((err) => {
                console.error('Error deleting user:', err);
            });
    };

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">DTH TABLE</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Floor</th>
                                        <th>Room Number</th>
                                        <th>DTH Company</th>
                                        <th>Card number</th>
                                        <th>Recharge on</th>
                                        <th>Recharge expired on</th>
                                        <th>Remainder on</th>
                                        <th>Remarks</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(users) && users.map((ele, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{ele.floornumber}</td>
                                            <td>{ele.roomnumber}</td>
                                            <td>{ele.DTHCompany}</td>
                                            <td>{ele.CardNumber}</td>
                                            <td>{ele.Rechargeon}</td>
                                            <td>{ele.Rechargeexpired}</td>
                                            <td>{ele.Remainder}</td>
                                            <td>{ele.Remarks}</td>
                                            <td>
                                                <Link to={`/DThpage/editdata/${ele._id}`}s >
                                                    <Button variant="primary">Edit</Button>
                                                </Link>
                                                <Button variant='danger' onClick={() => deleteUser(ele._id)}>Delete</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Getdata;
