import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

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
            <Table className='container' striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Images</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody style={{ width: '120px' }}>
                    {
                        items.map(item => {
                            return <tr key={item._id}>
                                <td style={{ width: '130px' }} > <h4>{item.name}</h4> </td>
                                <td style={{ width: '130px' }}>
                                    <img style={{ width: '130px' }} src={item.img} alt="" />
                                </td>
                                <td style={{ width: '130px' }}> <h6>{item.price}</h6> </td>
                                <td style={{ width: '130px' }}> <h6>{item.quantity}</h6> </td>
                                <td style={{ width: '130px' }}>
                                    <Button className='btn btn-danger'>Delete</Button>
                                    <br />
                                    <Button className='btn btn-success'>Edit</Button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>

        </div>
    );
};

export default ManageItem;