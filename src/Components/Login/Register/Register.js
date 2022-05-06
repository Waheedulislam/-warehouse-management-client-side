import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import auth from '../../../firebase.init'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Social from '../Social/Social';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { async } from '@firebase/util';


const Register = () => {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);




    const navigateLogin = () => {
        navigate('/login')
    };
    if (user) {
        console.log('user', user);
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;


        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home')
    }

    return (
        <div className='register-form'>


            <div class="card" className='shadow-lg'>
                <hr />
                <div class="card-body " className='pb-0' >
                    <h1 className='text-center' variant="dark">Please Register</h1>
                    <form onSubmit={handleRegister} className='w-50 mx-auto pt-2 container'>
                        <input type="text" name="name" id="" placeholder='Your Name' required />
                        <input type="email" name="email" id="" placeholder='Email Address' required />
                        <input type="password" name="password" id="" placeholder='Password' required />
                        <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                        <label className={agree ? 'text-dark' : 'text-danger'} htmlFor="terms"><h6 className='ps-2'>Accept Terms and Condition</h6></label>

                        <Button style={{ height: '54px' }}
                            disabled={!agree}
                            type="submit"
                            value="Login"
                            bg="dark"
                            variant="dark"
                            className='btn-lR h-25 w-50 mx-auto d-block'><h5>Register</h5></Button>
                    </form>
                    <h6 className='mt-3 w-50 mx-auto'>Already have an account ? <Link to='/login' className='text-danger pe-auto  text-decoration-none' onClick={navigateLogin}>Login</Link></h6>
                    <Social></Social>

                </div>
                <hr />
            </div>


        </div>

    );
};

export default Register;
