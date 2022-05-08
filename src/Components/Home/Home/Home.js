import React from 'react';
import Banner from '../Banner/Banner';
import BikeLogo from '../BikeLogo/BikeLogo';
import Items from '../Items/Items'
import PopularItems from '../PopularItems/PopularItems';
const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Items></Items>
            <BikeLogo></BikeLogo>
            <PopularItems></PopularItems>
        </>
    );
};

export default Home;