import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const url = `https://lit-fjord-75870.herokuapp.com/item`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItems(data.slice(0, 6))
            })
    }, [])
    return (
        <div id='item' className='container '>
            <h1 className='text-center pt-5'>Product Collection</h1>
            <div className='row'>
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Items;