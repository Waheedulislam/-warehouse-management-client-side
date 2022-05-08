import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PopularItem = ({ popularItem }) => {
    const { id, name, img, description, price, quantity, SellerName } = popularItem;

    return (
        <div className='col-sm-12 g-5 col-md-6 col-lg-4 ' >
            <Card style={{ width: '20rem' }} className='item shadow-lg p-3 mb-3 mt-3 bg-body rounded'>
                <Card.Img variant="top" style={{ height: '200px' }} src={img} />
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
                    <Link to='/popularItem'><Button bg="dark" variant="dark" className='btn-product w-16 shadow-lg'>SEE DETAILS</Button></Link>
                </Card.Body>

            </Card>

        </div>

    );
};

export default PopularItem;