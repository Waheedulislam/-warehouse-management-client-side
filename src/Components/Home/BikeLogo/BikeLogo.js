import React from 'react';
import hero from '../../../img/hero.png'

const BikeLogo = () => {
    return (
        <div className='container pt-5 Pb-5'>
            <div >
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100 h-50" src={hero} alt="First slide" />
                            <div class="carousel-caption d-none d-md-block">
                                <h1 className='text-dark'>
                                    HERO KARIZMA ZMR</h1>
                                <p className='text-dark'>
                                    Karizma ZMR, the newest model added to the Hero Karizma bike family, comes with great mileage and an easy-on-the-pocket price .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BikeLogo;