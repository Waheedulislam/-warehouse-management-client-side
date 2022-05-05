import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Item = ({ item }) => {
    const { name, img, description, price, quantity, SellerName } = item;
    return (
        <div className='col-sm-12 g-5 col-md-6 col-lg-4'>
            {/* <div class="card" style={{ width: "18rem" }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div> */}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <h2 className='text-center'>{name}</h2>
                    <Card.Text className='text-center'>
                        {description}
                    </Card.Text>
                    <hr />
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
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Item;