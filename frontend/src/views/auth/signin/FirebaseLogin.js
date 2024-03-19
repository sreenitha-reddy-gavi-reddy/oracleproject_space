import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

const FirebaseLogin = () => {
  const [data, setData] = useState({
    email:'',
    password:''
  })
  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:5000/api/user-login',data).then((res)=>{
      console.log(res.status)
      if(res.status === 200){
        alert("success")
        //setData(res.data)
        localStorage.setItem('userAuth',JSON.stringify(res.data.existingUser))
        window.location.href='/dashboard'
      }
    }).catch((err)=>{
      alert(err)
    })
  }
  return (
    <>       
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <input
                className="form-control"
                label="Email Address / Username"
                placeholder='Enter email'
                name="email"
                onChange={(e)=>setData({...data,email:e.target.value})}
                type="email"
                value={data.email}
              />
             
            </div>
            <div className="form-group mb-4">
              <input
                className="form-control"
                placeholder='Enter password'
                label="Password"
                name="password"
                onChange={(e)=>setData({...data,password:e.target.value})}
                type="password"
                value={data.password}
              />
             
            </div>


            <Row>
              <Col mt={2}>
                <Button className="btn-block" color="primary" size="large" type="submit" variant="primary">
                  Signin
                </Button>
              </Col>
            </Row>
          </form>
      <hr />
    </>
  );
}

export default FirebaseLogin;