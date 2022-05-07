import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Banner from '../../src/img/bike/banner2 (2).png'

const Inventory = () => {
    const { inventoryId } = useParams();
    const [item, setItem] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/item/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    return (
        <div className='container d-flex '>
            <div className='mx-auto pt-2' >
                <Card className='shadow-lg w-80 bg-body rounded '>
                    <Card.Body >
                        <Card.Img variant="top" src={item.img} />
                        <hr />
                        <h1 className='text-center'>{item.name}</h1>
                        <h5 >
                            {item.description}
                        </h5>
                        <hr />
                        <div className='d-flex justify-content-center'>
                            <h5>Supplier Name:</h5> <h6 className=' ps-1 pt-1'>{item.SellerName}</h6>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <h5 className='text-center ps-2'>Price:</h5> <h6 className=' ps-1 pe-2'>{item.price}</h6>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <h4 className='text-center ps-1 pb-1'>Quantity:</h4> <h5 className=' ps-1'>{item.quantity}</h5>
                        </div>
                        <div>
                            <Button className='btn btn primary'>Delivered</Button>
                        </div>
                        <Link to='/manageInventory'> <Button className='btn btn primary'>Manage Item</Button></Link>

                    </Card.Body>
                </Card>
                {/* <Link to='/home'>Go home</Link> */}
            </div>
            <div>
                {/* <img src={Banner} alt="" /> */}
            </div>

        </div>

    );
};

export default Inventory;