import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useItems from '../../Hooks/useItems';
import './ManageItem.css'

const ManageItem = () => {
    const [items, setItems] = useItems();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to delete ?')
        if (proceed) {
            const url = `https://lit-fjord-75870.herokuapp.com/item/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const uiDelete = items.filter(item => item._id !== id);
                    setItems(uiDelete);
                })
        }
    }
    return (
        <div>
            <h1 className='text-center text-dark'><span className='text-success'>Total</span> <span className='text-danger'>Products: {items.length}</span></h1>
            <Link to='/addItem'>
                <button className='bg-white shadow-lg mt-3 mb-3' style={{ marginLeft: '640px' }}><h5 className='d-flex pt-2'>
                    ADD NEW ITEM</h5></button>
            </Link>
            <div>
                <Table className='container mt-2 text-center' striped bordered hover size="sm" responsive>
                    <thead className='tdt-res'>
                        <tr>
                            <th><h4>Name</h4></th>
                            <th><h5 ><small>Images</small></h5></th>
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

                                        <Button onClick={() => handleDelete(item._id)} className='btn btn-danger'>Delete</Button>
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

        </div >
    );
};

export default ManageItem;