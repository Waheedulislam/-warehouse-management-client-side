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

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={
          <Blogs></Blogs>
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
