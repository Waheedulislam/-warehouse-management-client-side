import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './inventory.css'

const Inventory = () => {
    const { inventoryId } = useParams();
    const [item, setItem] = useState({});
    const [quantity, setQuantity] = useState({});



    const handleDelivered = (quantity) => {

        try {
            const newQuantity = quantity - 1;
            const url = `https://lit-fjord-75870.herokuapp.com/item/${inventoryId}`

            const getData = async () => {
                const response = await axios.put(url, { newQuantity })
                alert('Are you sure Want to Delivered')
                setItem(response.data);
            }
            getData();
        } catch {

        }
    }

    // add new quantity
    const handleQuantitySubmit = e => {
        e.preventDefault();
        try {
            const url = `https://lit-fjord-75870.herokuapp.com/addQuantity/${inventoryId}?oldQuantity=${item.quantity}`;

            const updateQuantity = async () => {
                const response = await axios.put(url, { quantity })
                console.log(response.data.massage);
            }
            updateQuantity();
        } catch {

        }
    }


    useEffect(() => {
        try {
            const url = `https://lit-fjord-75870.herokuapp.com/itemDetails/${inventoryId}`;

            const add = async () => {
                const response = await axios.get(url)
                setItem(response.data)
            }
            add();
        } catch {

        }

    }, [item])



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
                                <h4 className='text-center ps-1 pb-1'>Quantity:</h4> <h5 className='pt-1 ps-1' id="total-quantity">{item.quantity}</h5>
                            </div>


                            <button onClick={() => handleDelivered(item.quantity)} className='btn btn-danger'>Delivered</button>
                        </div>
                        <hr />
                        <div className='text-center'>
                            <h4>Add a Quantity</h4>

                            <form onSubmit={handleQuantitySubmit}>
                                <input required onBlur={(e) => setQuantity(e.target.value)} placeholder='Increase Quantity' type="number" name="number" id="" />
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