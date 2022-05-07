import React from 'react';
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
            shortDescription: event.target.description.value,
        }
        const url = `http://localhost:5000/item`;
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
                toast('Successful Item added')
                event.target.reset();
            })
    }
    // const onSubmit = data => {
    //     const order = {
    //         email: user.email
    //     }
    //     const url = `http://localhost:5000/item?email=${order}`;
    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result);
    //         })
    // };


    return (
        <div>
            <h1>add item</h1>
            <form onSubmit={handleNewItem} className="text-center">
                <input required className='w-50 mb-2' type="text" name="name" placeholder='Name' id="" />
                <br />

                <input required className='w-50 mb-2' type="text" name="img" placeholder='photo URL' id="" />
                <br />

                <input required className='w-50 mb-2' type="text" name="price" placeholder='Price' id="" />
                <br />
                <input required className='w-50 mb-2' type="text" name='quantity' placeholder='quantity' />
                <br />
                <input required className='w-50 mb-2' type="email" value={user.email} readOnly disabled name="email" id="" placeholder='email' />
                <br />
                <input required className='w-50 mb-2' type="text" name="description" placeholder='shortDescriptions' id="" />
                <br />
                <input type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;