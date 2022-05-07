import useItems from '../../Hooks/useItems';

const MyItems = () => {
    const [items, setItems] = useItems();
    return (
        <div>
            <h1 className='text-center text-primary'>My Items</h1>
            {
                items.map(item => <div key={item._id}>
                    <h4>{item.name}</h4>
                </div>)
            }

        </div>
    );
};

export default MyItems;