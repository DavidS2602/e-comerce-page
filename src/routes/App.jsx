import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../App.css'
import { Login } from '../containers/Login';
import { RecoveryPassword } from '../containers/RecoveryPassword';
import { Home } from './Home';
import { NotFound } from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/recovery-password" element={<RecoveryPassword />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
