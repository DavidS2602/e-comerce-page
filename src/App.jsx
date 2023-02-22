import { useState } from 'react'
import './App.css'
import { Layout } from './containers/Layout';
import { Login } from './containers/Login';

function App() {
  return (
    <Layout>
      <Login />
    </Layout>
  )
}

export default App
