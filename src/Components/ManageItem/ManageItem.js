import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ManageItem.css'

const ManageItem = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/item`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])
    return (
        <div>
            <h1 className='text-center text-dark'><span className='text-success'>Total</span> <span className='text-danger'>Products: {items.length}</span></h1>
            <Link to='/addItem'>
                <Button variant="dark" className='mx-auto d-block   w-15 m-2'><h6 className='text decoration none' >
                    ADD NEW ITEM</h6></Button>
            </Link>
            <div>
                <Table className='container mt-2' striped bordered hover size="sm" responsive>
                    <thead className='tdt-res'>
                        <tr>
                            <th><h4>Name</h4></th>
                            <h5 ><small>Images</small></h5>
                            <th><h4>Price</h4></th>
                            <th><h4>Quantity</h4></th>
                            <th><h4>Update</h4></th>
                        </tr>
                    </thead>
                    <tbody className='td-res' style={{ width: '120px' }}>
                        {
                            items.map(item => {
                                return <tr key={item._id}>
                                    <td style={{ width: '130px' }} > <h4>{item.name}</h4> </td>
                                    <td style={{ width: '100px' }}>
                                        <img style={{ width: '220px' }} src={item.img} alt="" />
                                    </td>
                                    <td style={{ width: '100px' }}> <h4>{item.price}</h4> </td>
                                    <td style={{ width: '100px' }}> <h4>{item.quantity}</h4> </td>
                                    <td style={{ width: '80px' }}>
                                        <Button className='btn btn-danger'>Delete</Button>
                                        <br />
                                        <br />
                                        <Button style={{ width: '74px' }} className='btn btn-success'>Edit</Button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </div>

        </div>
    );
};

export default ManageItem;