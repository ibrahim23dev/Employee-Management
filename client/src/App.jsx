import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Shops from './pages/Shops';
import Register from './pages/Register'
import CategoryShops from './pages/CategoryShop';
import SearchProducts from './pages/SearchProducts';
import Card from './pages/Card';
import ConfirmOrder from './pages/ConfirmOrder';
import Shipping from './pages/Shipping';
import Payment from './pages/Payment';
import Details from './pages/Details';
import Login from './pages/Login'
import ProtectUser from './utils/ProtectUser';
import Dashboard from './pages/Dashboard';
import Index from './components/dashbord/Index';
import Orders from './components/dashbord/Orders';
import Wishlist from './components/dashbord/Wishlist';
import Order from './components/dashbord/Order';
import ChangePassword from './components/dashbord/ChangePassword';
import Chat from './components/dashbord/Chat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/shops' element={<Shops />} />
        <Route path='/products?' element={<CategoryShops />} />
        <Route path='/products/search?' element={<SearchProducts />} />
        <Route path='/card' element={<Card />} />
        <Route path='/order/confirm?' element={<ConfirmOrder />} />
        <Route path='/shipping' element={<Shipping />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/product/details/:slug' element={<Details />} />
         
        <Route path='/dashboard' element={<ProtectUser />}>
          <Route path='' element={<Dashboard />}>
            <Route path='' element={<Index />} />
            <Route path='my-orders' element={<Orders />} />
            <Route path='my-wishlist' element={<Wishlist />} />
            <Route path='order/details/:orderId' element={<Order />} />
            <Route path='chage-password' element={<ChangePassword />} />
            <Route path='chat' element={<Chat />} />
            <Route path='chat/:sellerId' element={<Chat />} />
          </Route>
       </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
