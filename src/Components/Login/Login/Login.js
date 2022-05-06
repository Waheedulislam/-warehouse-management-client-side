import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Social from '../Social/Social';
import './Login.css'

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('')
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement =
            <h6 className='text-danger'>Error: {error?.message} </h6>
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)


    }
    const navigateRegister = event => {
        navigate('/register');
    }

    return (
        <div className='w-50 mx-auto register-form'>

            {/* <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form> */}
            <div class="card" style={{ hight: '30px' }} className='shadow-lg mt-4'>
                <hr />
                <h1 className='text-center' variant="dark">Please Login</h1>
                <div class="card-body ">
                    <form onSubmit={handleSubmit} className='w-50 mx-auto'>
                        <input ref={emailRef} type="email" name="email" id="" placeholder='Email Address' required />
                        <input ref={passwordRef} type="password" name="password" id="" placeholder='Password' required />

                        <Button
                            type="submit"
                            value="Login"
                            bg="dark"
                            variant="dark"
                            className='btn-lR  w-50 mx-auto d-block shadow-lg'><h5>Login</h5></Button>
                        {/* <Button
                    type="submit" variant="bg-success" className="btn btn-color custom-bg-color mx-auto d-block mt-2 w-50 btn-hight  mt-3"><span className='text-white'><h5>Register</h5></span></Button> */}

                    </form>
                    {
                        errorElement
                    }
                    <h6 className='mt-3 w-50 mx-auto'>New to BIKE WAY ? <Link to='/register' className='text-danger pe-auto  text-decoration-none' onClick={navigateRegister}>Please Register</Link></h6>
                    <Social></Social>
                </div>
                <hr />
            </div>

        </div >
    );
};

export default Login;