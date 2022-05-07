import React from 'react';
import Not from '../../../img/404.jpg';

const NotFound = () => {
    return (
        <div className=' container  mx-auto'>
            <img className='w-50' src={Not} alt="" />
        </div>
    );
};

export default NotFound;