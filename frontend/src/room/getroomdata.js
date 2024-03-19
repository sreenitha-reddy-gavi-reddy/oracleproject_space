
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Row, Table, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Getroomdata = () => {
    const [guests, setGuests] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Number of items per page

    useEffect(() => {
        axios.get('http://localhost:5000/api/getuser-roomdata')
            .then((response) => {
                setGuests(response.data.userroomdata);
            })
            .catch((error) => {
                console.error('Error fetching room data:', error);
            });
    }, []);

    const deleteUser = (id) => {
        axios.delete(`http://localhost:5000/api/deleteuser/${id}`)
            .then((res) => {
                console.log(res);
                alert("Data deleted successfully");
                window.location.reload();
            })
            .catch((err) => {
                console.error('Error deleting user:', err);
            });
    };

    const nextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    // Calculate start and end indexes for current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = guests.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate total number of pages
    //const totalPages = Math.ceil(guests.length / itemsPerPage);

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Floor</th>
                                        <th>Room Number</th>
                                        <th>Room Type</th>
                                        <th>Remarks</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(currentItems) && currentItems.map((ele, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{indexOfFirstItem + index + 1}</td>
                                                <td>{ele.floornumber}</td>
                                                <td>{ele.roomnumber}</td>
                                                <td>{ele.roomtype}</td>
                                                <td>{ele.remarks}</td>
                                                <td>
                                                    <Link to={`/room/editroomdata/${ele._id}`}>
                                                        <Button>Edit</Button>
                                                    </Link>
                                                    <Button variant='danger' onClick={() => deleteUser(ele._id)}>Delete</Button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <Button disabled={currentPage === 1} onClick={prevPage}>Previous</Button>
                                    <span style={{marginRight:10}}>{currentPage}</span>
                                    <Button disabled={currentItems.length < itemsPerPage} onClick={nextPage}>Next</Button>
                                </div>
                                
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Getroomdata;
