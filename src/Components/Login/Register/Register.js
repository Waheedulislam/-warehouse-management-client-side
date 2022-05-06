import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import auth from '../../../firebase.init'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Social from '../Social/Social';
import { Button } from 'react-bootstrap';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();


    const navigateLogin = () => {
        navigate('/login')
    };
    if (user) {
        navigate('/home')
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='register-form'>


            <div class="card" className='shadow-lg'>
                <hr />
                <div class="card-body " className='pb-0' >
                    <h1 className='text-center' variant="dark">Please Register</h1>
                    <form onSubmit={handleRegister} className='w-50 mx-auto pt-2'>
                        <input type="text" name="name" id="" placeholder='Your Name' required />
                        <input type="email" name="email" id="" placeholder='Email Address' required />
                        <input type="password" name="password" id="" placeholder='Password' required />
                        <Button style={{ height: '54px' }}
                            type="submit"
                            value="Login"
                            bg="dark"
                            variant="dark"
                            className='btn-lR h-25 w-50 mx-auto d-block'><h5>Register</h5></Button>
                    </form>
                    <h6 className='mt-3 w-50 mx-auto'>Already have an account ? <Link to='/login' className='text-danger pe-auto  text-decoration-none' onClick={navigateLogin}>Please Login</Link></h6>
                    <Social></Social>

                </div>
                <hr />
            </div>


        </div>

    );
};

export default Register;
