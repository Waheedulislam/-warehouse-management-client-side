import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

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
            <h1 className='text-center text-primary'> Item:{items.length}</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Images</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Supplier</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => {
                            return <tr key={item._id}>
                                <td>
                                    <img style={{ width: '130px' }} src={item.img} alt="" />
                                </td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.SellerName}</td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>

        </div>
    );
};

export default ManageItem;