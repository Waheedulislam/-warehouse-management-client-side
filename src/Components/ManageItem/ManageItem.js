import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
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
            <div>
                <Table striped bordered hover size="sm" responsive>
                    <thead className='tdt-res'>
                        <tr>
                            <th>Name</th>
                            <h5 ><small>Images</small></h5>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Update</th>
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