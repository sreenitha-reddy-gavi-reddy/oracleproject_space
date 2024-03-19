import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Row, Col, Card, Button,Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const OrderList=()=>{
    let [users,setUsers]=useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const pageSize = 5; // Number of items per page
    useEffect(()=>{
        axios.get('http://localhost:5000/api/get-repair').then((response)=>{
            setUsers(response.data.users);
        });
    },[]);
    const deleteUser = (id) => {
        axios.delete(`http://localhost:5000/api/delete-repair/${id}`)
            .then(res => {
                console.log(res);
                alert("Data deleted successfully");
                window.location.reload();
            })
            .catch(err => {
                console.error('Error deleting user:', err);
            });
    };
    const handlePrevClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNextClick = () => {
        const maxIndex = Math.ceil(users.length / pageSize) - 1;
        if (currentIndex < maxIndex) {
            setCurrentIndex(currentIndex + 1);
        }
    };
    return(
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Maintain List</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive className="table-columned text-center">
                                <thead>
                                    <th>Floor</th>
                                    <th>Room Number</th>
                                    <th>Type of Room</th>
                                    <th>Work Information</th>
                                    <th>Work Started Date</th>
                                    <th>Work Completed On</th>
                                    <th>Status</th>
                                    <th>If Work Delay</th>
                                    <th>Action</th>
                                </thead>
                                <tbody>
                                {users.slice(currentIndex * pageSize, (currentIndex + 1) * pageSize).map((ele, index)=>{
                                            return(
                                                <tr key={index}>
                                                    <td>{index+1}</td>
                                                    <td>{ele.floor}</td>
                                                    <td>{ele.roomnumber}</td>
                                                    <td>{ele.roomtype}</td>
                                                    <td>{ele.work}</td>
                                                    <td>{ele.workstart}</td>
                                                    <td>{ele.workend}</td>
                                                    <td>{ele.state}</td>
                                                    <td>
                                                        <Link to={`/editmaintain/${ele._id}`} ><Button variant="primary">Edit</Button></Link>
                                                        <Button variant='danger' onClick={() => deleteUser(ele._id)}>Delete</Button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                </tbody>
                                <tr>
                                    <td><Button variant='primary' onClick={handlePrevClick}>Previous</Button></td>
                                    <td><Button variant='primary' onClick={handleNextClick}>Next</Button></td>
                                </tr>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}
export default OrderList;