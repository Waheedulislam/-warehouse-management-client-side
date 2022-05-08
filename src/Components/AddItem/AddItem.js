import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init'

const AddItem = () => {

    const [user] = useAuthState(auth);

    const handleNewItem = event => {
        event.preventDefault();
        const addItem = {
            name: event.target.name.value,
            img: event.target.img.value,
            price: event.target.price.value,
            email: user.email,
            quantity: event.target.quantity.value,
            shortDescription: event.target.description.value,
        }
        const url = `https://lit-fjord-75870.herokuapp.com/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addItem)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                alert('Successful Item added')
                event.target.reset();
            })
    };

    return (
        <div className='mt-5'>
            <form onSubmit={handleNewItem} className="text-center">
                <h1>Add Product</h1>
                <input required className='w-50 mb-2' type="email" value={user.email} readOnly disabled name="email" id="" placeholder='email' />
                <br />

                <input required autoComplete='off' className='w-50 mb-2' type="text" name="name" placeholder='Name' id="" />
                <br />

                <textarea required autoComplete='off' className='w-50 mb-2' type="text" name="description" placeholder='shortDescriptions' id="" />
                <br />

                <input required autoComplete='off' className='w-50 mb-2' type="text" name="price" placeholder='Price' id="" />
                <br />
                <input required autoComplete='off' className='w-50 mb-2' type="text" name='quantity' placeholder='Quantity' />
                <br />
                <input required autoComplete='off' className='w-50 mb-2' type="text" name="img" placeholder='photo URL' id="" />
                <br />

                <Button type="submit" bg="dark" variant="dark" className='mb-5 w-16'>Add Item</Button>
            </form>
        </div >
    );
};

export default AddItem;