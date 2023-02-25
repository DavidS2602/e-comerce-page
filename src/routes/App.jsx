import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../App.css'
import { NewPassword } from '../Pages/NewPassword';
import { RecoveryPassword } from '../Pages/RecoveryPassword';
import { Home } from '../Pages/Home';
import { NotFound } from '../Pages/NotFound';
import { Login } from '../Pages/Login';
import { CreateAccount } from '../Pages/CreateAccount';
import { MyAccount } from './../Pages/MyAccount';
import { MyOrders } from './../components/MyOrders';
import { Checkout } from '../components/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/recovery-password" element={<RecoveryPassword />} />
          <Route exact path="/NewPassword" element={<NewPassword />} />
          <Route exact path="/CreateAccount" element={<CreateAccount />} />
          <Route exact path="/MyAccount" element={<MyAccount />} />
          <Route exact path="/Checkout" element={<Checkout />} />//Ver mis ordenes
          <Route exact path="/OrdersUser" element={<MyOrders />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
