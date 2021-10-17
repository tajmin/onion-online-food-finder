import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    return (
        <div className="d-flex align-items-center justify-content-center" id="login">
            <div className="row">

                <h1>Please Login</h1>
                <Button variant="outline-danger" onClick={handleGoogleSignIn}>
                    <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Sign In Using Google
                </Button>
            </div>
        </div>
    );
};

export default Login;
