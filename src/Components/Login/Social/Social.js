import React from 'react';
import Google from '../../../img/GoogLogo.png'
import Github from '../../../img/GitHub1.png'
import './Social.css'
import { Button } from 'react-bootstrap';
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../../shared/Loading/Loading';

const Social = () => {
    let errorElement;
    const navigate = useNavigate();

    // Google
    const [signInWithGoogle,
        userGoogle,
        loadingGoogle,
        errorGoogle
    ] = useSignInWithGoogle(auth);

    // GitHub
    const [signInWithGithub,
        userGithub,
        loadingGithub,
        errorGithub
    ] = useSignInWithGithub(auth);

    if (loadingGithub || loadingGoogle) {
        return <Loading></Loading>
    }

    if (errorGoogle || errorGithub) {
        errorElement =
            <h6 className='text-danger'>Error: {errorGoogle?.message} {errorGithub?.message}</h6>
    };
    if (userGoogle || userGithub) {
        navigate('/home');
    };


    return (
        <div>
            <div className='d-flex d align-items-center w-50 mt-0 mx-auto'>
                <div style={{ height: '2px', }} className='lefts-div'></div>
                <p className='m-2 p-2 pg-style'>or</p>
                <div style={{ height: '2px' }} className='rights-div'></div>
            </div>
            {
                errorElement
            }
            <div style={{ marginBottom: '100px', marginTop: '0' }} className='pt-1'>
                <Button variant=""
                    onClick={() => signInWithGoogle()}
                    style={{ height: '59px', border: '2px solid black' }}
                    className="gg-style shadow-lg  mx-auto d-block mt-2 w-50 ">

                    <img style={{ width: '32px ', marginRight: '10px' }} className='img-style' src={Google} alt="" />
                    <span className='span-styles text-black'>Google SignIn</span>

                </Button>

                <Button variant="dark"
                    onClick={() => signInWithGithub()}
                    className=" gg-style mx-auto d-block mt-2 w-50">

                    <img style={{ width: '45px', marginRight: '10px' }} className=' text-color' src={Github} alt="" />
                    <span className='span-styles text-white'>GitHub</span>
                </Button>

            </div>
        </div >
    );
};

export default Social;