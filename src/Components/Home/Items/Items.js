import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const url = `data.json`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItems(data)
            })
    }, [])
    return (
        <div id='item' className='container '>
            <h1 className='text-center pt-5'>Product Collection</h1>
            <div className='row'>
                {
                    items.map(item => <Item
                        item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Items;