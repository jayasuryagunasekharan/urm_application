import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import RegisterHeader from './RegisterHeader';
import IndexFooter from './IndexFooter';


function Register() {
    return (
        <Fragment>
            <header>
                <div className="header-container">
                    <h1>Register</h1>
                    <RegisterHeader />
                    <img src="assets/images/surya.jpg" className="user-pic" alt=""></img>
                </div>
            </header>



            <IndexFooter />
        </Fragment >
    )
}

export default Register;