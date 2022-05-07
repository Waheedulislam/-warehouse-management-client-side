import React from 'react';

const Footer = () => {
    return (
        <footer className=' mt-5' class="text-light bg-dark" style={{ height: '65px' }}>
            <p className='text-white font h6 text-center pt-4'><small>Copyright © {(new Date().getFullYear())} bikeway.com</small></p>
        </footer>
    );
};

export default Footer;