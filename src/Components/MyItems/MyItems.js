import { Button, Table } from 'react-bootstrap';
import useItems from '../../Hooks/useItems';

const MyItems = () => {
    const [items, setItems] = useItems();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to delete ?')
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`
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
            <h1 className='text-center text-dark'><span className='text-success'>MY</span> <span className='text-danger'>Add </span><span className='text-success'>Items</span></h1>
            <div>
                <Table className='container mt-2' striped bordered hover size="sm" responsive>
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
                                if (item.email) {
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
                                }
                            })
                        }
                    </tbody>
                </Table>
            </div>

        </div>
    );
};

export default MyItems;