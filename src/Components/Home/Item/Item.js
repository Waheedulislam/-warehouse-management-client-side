import React from 'react';
import './Item.css'
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Item = ({ item }) => {
    const { _id, name, img, description, price, quantity, SellerName } = item;
    const navigate = useNavigate();

    const navigateToInventory = (id) => {
        navigate(`/inventory/${id}`)
    }

    return (
        <div className='col-sm-12 g-5 col-md-6 col-lg-4 '>
            <Card style={{ width: '20rem' }} className='item shadow-lg p-3 mb-5 bg-body rounded'>
                <Card.Img variant="top" src={img} />
                <Card.Body >
                    <h2 className='text-center'>{name}</h2>
                    <Card.Text className='text-center'>
                        {description}
                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-center '>
                        <div className='d-flex align-items-center justify-content-center'>
                            <h5 className='text-center ps-2'>Price:</h5> <h6 className=' ps-1 pe-2'>{price}</h6>
                        </div>
                        <div className='d-flex align-items-center justify-content-center '>
                            <h5 className='text-center ps-1 pb-1'>Quantity:</h5> <h6 className=' ps-1'>{quantity}</h6>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-center '>
                        <h5>Supplier Name:</h5> <h6 className=' ps-1 pt-1'>{SellerName}</h6>
                    </div>
                    <Button onClick={() => navigateToInventory(_id)} bg="dark" variant="dark" className='btn-product w-16'>STOCK UPDATE</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Item;