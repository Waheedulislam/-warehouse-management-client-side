import React from 'react';
import Google from '../../../img/GoogLogo.png'
import Github from '../../../img/GitHub1.png'
import './Social.css'
import { Button } from 'react-bootstrap';
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

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

    if (errorGoogle || errorGithub) {
        errorElement = <div>
            <h6 className='text-danger'>Error: {errorGoogle?.message} {errorGithub?.message}</h6>
        </div>
    }
    if (userGoogle || userGithub) {
        navigate('/home');
    };


    return (
        <div>
            <div className='d-flex d align-items-center'>
                <div style={{ height: '2px', }} className='lefts-div'></div>
                <p className='m-2 p-2 pg-style'>or</p>
                <div style={{ height: '2px' }} className='rights-div'></div>
            </div>
            {
                errorElement
            }
            <div style={{ marginBottom: '100px', marginTop: '0' }} className='pt-3'>
                <Button variant=""
                    onClick={() => signInWithGoogle()}
                    style={{ height: '59px' }}
                    className=" custom-bg-color mx-auto d-block mt-2 w-50 ">

                    <img style={{ width: '32px ', marginRight: '10px' }} src={Google} alt="" />
                    <span className='span-styles text-white'>Google Sign In</span>

                </Button>

                <Button variant=""
                    onClick={() => signInWithGithub()}
                    className="mx-auto d-block custom-bg-color mt-2 w-50">
                    <img style={{ width: '45px', marginRight: '10px' }} className='text-color' src={Github} alt="" />
                    <span className='span-style text-white'>GitHub</span>
                </Button>

            </div>
        </div >
    );
};

export default Social;