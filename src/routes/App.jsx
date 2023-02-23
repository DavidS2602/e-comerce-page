import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../App.css'
import { NewPassword } from '../containers/NewPassword';
import { RecoveryPassword } from '../containers/RecoveryPassword';
import { Home } from './Home';
import { NotFound } from './NotFound';
import { Login } from './../containers/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/NewPassword" element={<NewPassword />} />
          <Route exact path="/recovery-password" element={<RecoveryPassword />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
