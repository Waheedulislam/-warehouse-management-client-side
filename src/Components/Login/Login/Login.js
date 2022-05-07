import React, { useRef } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading/Loading';
import Social from '../Social/Social';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('')
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    // reset Email
    const [
        sendPasswordResetEmail,
        sending,
    ] = useSendPasswordResetEmail(auth);

    // signIn email
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    //loading
    if (loading || sending) {
        return <Loading></Loading>
    }
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
    //  reset password
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Reset Email');
        } else {
            toast('Please enter your email address ...!')
        }
    }

    return (
        <div className='container register-form'>


            <div>
                {/* <div class="card" style={{ hight: '30px' }} className='shadow-lg mt-4'>
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

                        </form>
                        <div className='mx-auto w-50'>
                            {
                                errorElement
                            }
                        </div>
                        <h6 className='mt-3 w-50 mx-auto'>Don't have an account? <Link to='/register' className='text-danger pe-auto  text-decoration-none' onClick={navigateRegister}>Create Account</Link></h6>

                        <h6 className='mt-3 w-50 mx-auto'>Forget PassWord ?
                            <button className='btn btn-link pt-3 ps-2 text-danger text-decoration-none' onClick={resetPassword}><h6>Reset Password</h6></button>
                        </h6>

                        <Social></Social>
                        <ToastContainer />
                    </div>
                    <hr />
                </div> */}
                <Card className='shadow-lg w-80 bg-body rounded '>
                    <Card.Body >
                        <h1 className='text-center' variant="dark">Please Login</h1>
                        <form onSubmit={handleSubmit} className='w-50 mx-auto'>
                            <input ref={emailRef} type="email" name="email" id="" placeholder='Email Address' required />
                            <input ref={passwordRef} type="password" name="password" id="" placeholder='Password' required />

                            <Button
                                type="submit"
                                value="Login"
                                bg="dark"
                                variant="dark"
                                className='btn-lR  w-50 mx-auto d-block shadow-lg'><h5>Login</h5></Button>

                        </form>
                        <div className='mx-auto w-50'>
                            {
                                errorElement
                            }
                        </div>
                        <h6 className='mt-3 w-50 mx-auto'>Don't have an account? <Link to='/register' className='text-danger pe-auto  text-decoration-none' onClick={navigateRegister}>Create Account</Link></h6>

                        <h6 className='mt-3 w-50 mx-auto'>Forget PassWord ?
                            <button className='btn btn-link pt-3 ps-2 text-danger text-decoration-none' onClick={resetPassword}><h6>Reset Password</h6></button>
                        </h6>

                        <Social></Social>
                        <ToastContainer />

                    </Card.Body>
                </Card>
            </div>

        </div >
    );
};

export default Login;