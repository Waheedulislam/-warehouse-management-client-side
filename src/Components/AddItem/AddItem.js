import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };


    return (
        <div className='mx-auto w-50'>
            <h1 className='text-center text-success'><span className='text-success'>Add</span><span className='text-danger'> New </span> Item</h1>

            <div className='card shadow-lg'>
                <div className='card-body ' >
                    <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                        <input className='mb-2' placeholder='Name' required {...register("name")} />

                        <input className='mb-2' type='number' placeholder='Quantity' required {...register("quantity")} />

                        <textarea className='mb-2' placeholder='Description' required {...register("description")} />

                        <input className='mb-2' placeholder='Supplier Name' required {...register("SellerName")} />

                        <input className='mb-2' placeholder='Price' required type="number" {...register("price")} />

                        <input className='mb-2' placeholder='Photo URL' required type="text" {...register("img")} />
                        <input value='Add Product' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItem;