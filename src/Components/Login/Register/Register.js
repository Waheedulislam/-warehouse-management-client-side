import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    };


    const handleRegister = event => {
        event.preventDefault();
        // console.log(event.target.name);
        const name = event.target.name.value;
        const password = event.target.password.value;
        const email = event.target.email.value;
        console.log(name, password, email);
    }

    return (
        <div className='register-form'>
            <h1 className='text-center'>This is Register</h1>


            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' required />
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input type="submit" value="Register" />
                <h6>Already have an account ? <Link to='/login' className='text-danger pe-auto  text-decoration-none' onClick={navigateLogin}>Please Login</Link></h6>
            </form>

        </div>

    );
};

export default Register;