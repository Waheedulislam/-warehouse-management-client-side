import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home/Home';
import Header from './Components/shared/Header/Header';
import Footer from './Components/shared/Footer/Footer';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import NotFound from './Components/shared/NotFound/NotFound';
import Inventory from './Inventory/Inventory';
import Blogs from './Components/Blogs/Blogs';
import RequireAuth from './Components/Login/RequireAuth/RequireAuth';
import ManageItem from './Components/ManageItem/ManageItem';
import AddItem from './Components/AddItem/AddItem';
import MyItems from './Components/MyItems/MyItems';
import PopularItems from './Components/Home/PopularItems/PopularItems';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/popularItem' element={<PopularItems></PopularItems>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={
          <Blogs></Blogs>
        }></Route>
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/manageInventory' element={
          <RequireAuth>
            <ManageItem></ManageItem>
          </RequireAuth>
        }></Route>
        <Route path='/addItem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path='/myItem' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='/inventory/:InventoryId' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/inventory/:InventoryId' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
