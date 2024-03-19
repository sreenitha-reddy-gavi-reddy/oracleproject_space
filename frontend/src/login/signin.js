import React from 'react';
import { Card } from 'react-bootstrap';
// import Breadcrumb from '../layouts/AdminLayout/Breadcrumb';
import AuthLogin from '../views/auth/signin/FirebaseLogin';

const Signin = () =>{
        return(
            <React.Fragment>
                {/* <Breadcrumb/> */}
                <div className='auth-wrapper'>
                    <div className='auth-content'>
                        <div className='auth-bg'> 
                        <span className="r" />
                        <span className="r s" />
                        <span className="r s" />
                        <span className="r" />
                        </div>
                        <Card>
                        <Card.Body>
              <div className="mb-4">
                <i className="feather icon-unlock auth-icon" />
              </div>
              <AuthLogin />
            </Card.Body>
          </Card>
                    </div>
                </div>
            </React.Fragment>
        )
}
export default Signin;