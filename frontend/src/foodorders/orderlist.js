import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Row, Col, Card, Button,Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const OrderList=()=>{
    let [users,setUsers]=useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const pageSize = 5; // Number of items per page
    useEffect(()=>{
        axios.get('http://localhost:5000/api/get-user').then((response)=>{
            setUsers(response.data.users);
        });
    },[]);
    const deleteUser = (id) => {
        axios.delete(`http://localhost:5000/api/delete-user/${id}`)
            .then(res => {
                console.log(res);
                alert("Data deleted successfully");
                window.location.reload();
            })
            .catch(err => {
                console.error('Error deleting user:', err);
            });
    };
    const calculateTotalPrice = (row) => {
        const prices = {
            breakfastPrice: 33,           // Price for breakfast
            vegLunchPrice: 34,           // Price for veg lunch
            nv1price: 125,
            nv2price: 150,
            nv3price:175,        // Price for non-veg menu
            snacksPrice: 15,              // Price for snacks
            teaPrice: 6,                 // Price for tea
            coffeePrice: 8,            // Price for coffee
            vegDinnerPrice: 34,          // Price for veg dinner     // Price for non-veg dinner
        };
        let total = 0;
        total += (parseInt(row.breakfast) ? parseInt(prices.breakfastPrice) * parseInt(row.breakfast) : 0);
        total += (parseInt(row.veglunch) ? parseInt(prices.vegLunchPrice) * parseInt(row.veglunch) : 0);
        total += (parseInt(row.nonveglunch) ? parseInt(prices.nv1price) * parseInt(row.nonveglunch) : 0);
        total += (parseInt(row.nonveglunch) ? parseInt(prices.nv2price) * parseInt(row.nonveglunch) : 0);
        total += (parseInt(row.nonveglunch) ? parseInt(prices.nv3price) * parseInt(row.nonveglunch) : 0);
        total += (parseInt(row.snacks) ? parseInt(prices.snacksPrice) * parseInt(row.snacks) : 0);
        total += (parseInt(row.tea) ? parseInt(prices.teaPrice) * parseInt(row.tea) : 0);
        total += (parseInt(row.coffee) ? parseInt(prices.coffeePrice) * parseInt(row.coffee) : 0);
        total += (parseInt(row.vegdinner) ? parseInt(prices.vegDinnerPrice) * parseInt(row.vegdinner) : 0);
        total += (parseInt(row.quantity) ? parseInt(prices.nv1price) * parseInt(row.quantity) : 0);
        total += (parseInt(row.quantity) ? parseInt(prices.nv2price) * parseInt(row.quantity) : 0);
        total += (parseInt(row.quantity) ? parseInt(prices.nv3price) * parseInt(row.quantity) : 0);
    return total;
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
                            <Card.Title as="h5">Food Order List</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive className="table-columned text-center">
                                <thead>
                                    <th>S.No</th>
                                    <th>Guest Details</th>
                                    <th>Purpose of Visit</th>
                                    <th>Reference</th>
                                    <th>Team Size</th>
                                    <th>Date</th>
                                    <th>Breakfast</th>
                                    <th>Veg Lunch</th>
                                    <th>Non-Veg Menu</th>
                                    <th>Non-Veg Lunch Quantity</th>
                                    <th>Snacks</th>
                                    <th>Tea</th>
                                    <th>Coffee</th>
                                    <th>Veg Dinner</th>
                                    <th>Non-Veg Dinner Type</th>
                                    <th>Non-Veg Dinner Quantity</th>
                                    <th>Additional Items</th>
                                    <th>Amount</th>
                                    <th>Action</th>
                                </thead>
                                <tbody>
                                        {users.slice(currentIndex * pageSize, (currentIndex + 1) * pageSize).map((ele, index) =>{
                                            return(
                                                <tr key={index}>
                                                    <td>{currentIndex * pageSize + index + 1}</td>
                                                    <td>{ele.guest}</td>
                                                    <td>{ele.visit}</td>
                                                    <td>{ele.reference}</td>
                                                    <td>{ele.team}</td>
                                                    <td>{ele.dates}</td>
                                                    <td>{ele.breakfast}</td>
                                                    <td>{ele.veglunch}</td>
                                                    <td>{ele.nvmenu}</td>
                                                    <td>{ele.nonveglunch}</td>
                                                    <td>{ele.snacks}</td>
                                                    <td>{ele.tea}</td>
                                                    <td>{ele.coffee}</td>
                                                    <td>{ele.vegdinner}</td>
                                                    <td>{ele.nvdinner}</td>
                                                    <td>{ele.dinnerquantity}</td>
                                                    <td>------</td>
                                                    <td>{calculateTotalPrice(ele)}</td>
                                                    <td>
                                                        <Link to={`/editform/${ele._id}`} ><Button variant="primary">Edit</Button></Link>
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