import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Banner from '../../src/img/bike/banner2 (2).png'
import './inventory.css'

const Inventory = () => {
    const { inventoryId } = useParams();
    const [item, setItem] = useState([]);
    const [product, setProduct] = useState({});
    const { quantity } = product;

    useEffect(() => {
        const url = `http://localhost:5000/item/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])

    const addNewQuantity = event => {
        event.preventDefault();
        const quantity = event.target.number.value;
        console.log(quantity);
        event.target.reset();
    }
    return (
        <div className='d-flex w-100'>
            <div className='mx-auto pt-2 card-style' >
                <Card className='shadow-lg  mx-auto ' >
                    <Card.Body >
                        <Card.Img className='img-style' variant="top" src={item.img} />
                        <Link to='/home' > <Button className='btn btn-danger '>Back-Home</Button></Link>
                        <div>
                            <hr />
                            <Link to='/manageInventory' > <Button className='btn btn primary '>Manage Item</Button></Link>
                            <h1 className='text-center'>{item.name}</h1>
                            <p className='d-flex justify-content-center align-items-center'>
                                <h5 className='pe-2'>Description:</h5> {item.description}
                            </p>
                            <hr />
                            <div className='d-flex justify-content-center'>
                                <h5>Supplier Name:</h5> <h6 className=' ps-1 pt-1'>{item.SellerName}</h6>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <h5 className='text-center ps-2'>Price:</h5> <h6 className=' ps-1 pe-2'>{item.price}</h6>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <h4 className='text-center ps-1 pb-1'>Quantity:</h4> <h5 className='pt-1 ps-1'>{item.quantity}</h5>
                            </div>


                            <button className='btn btn-danger'>Delivered</button>
                        </div>
                        <hr />
                        <div className='text-center'>
                            <h4>Add a Quantity</h4>
                            <form onSubmit={addNewQuantity}>
                                <input onBlur={quantity} required placeholder='Increase Quantity' type="number" name="number" id="" />
                                <br />
                                <br />
                                <Button type='submit' className='btn btn-success'>Increase quantity</Button>
                            </form>
                        </div>
                    </Card.Body>
                </Card>
            </div>

        </div >

    );
};

export default Inventory;