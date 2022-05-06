import React from 'react';
import Google from '../../../img/GoogLogo.png'
import Github from '../../../img/GitHub1.png'
import './Social.css'
import { Button } from 'react-bootstrap';

const Social = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px', }} className='left-div'></div>
                <p className='m-2 p-2 p-style'>or</p>
                <div style={{ height: '2px' }} className='right-div'></div>
            </div>
            <div style={{ marginBottom: '100px', marginTop: '0' }}>
                <Button variant=""
                    className="btn-hight btn custom-bg-color btn-color  mx-auto d-block mt-2 w-50 ">
                    <img style={{ width: '30px ', marginRight: '10px' }} src={Google} alt="" />
                    <span className='span-style text-white'>Google Sign In</span>

                </Button>

                <Button variant=""
                    className="btn-hight btn btn-color  mx-auto d-block custom-bg-color mt-2 w-50">
                    <img style={{ width: '45px', marginRight: '10px' }} className='text-color' src={Github} alt="" />
                    <span className='span-style text-white'>GitHub</span>
                </Button>

            </div>
        </div>
    );
};

export default Social;