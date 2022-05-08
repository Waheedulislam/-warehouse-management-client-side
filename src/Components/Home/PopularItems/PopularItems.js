import React, { useEffect, useState } from 'react';
import PopularItem from '../PopularItem/PopularItem';

const PopularItems = () => {
    const [popularItems, setPopularItems] = useState([]);

    useEffect(() => {
        const url = 'popularItem.json'
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPopularItems(data)
            })
    }, [])
    return (
        <div id='item' className='container mt-5' style={{ backgroundColor: '#FFFFF1' }} >
            <h1 className='text-center pt-5'>Popular Selling Bike</h1>
            <div className='row'>
                {
                    popularItems.map(popularItem => <PopularItem
                        key={popularItem.id}
                        popularItem={popularItem}
                    >

                    </PopularItem>)
                }
            </div>
        </div>
    );

};

export default PopularItems;