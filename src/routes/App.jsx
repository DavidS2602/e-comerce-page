import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../App.css'
import { Layout } from '../containers/Layout';
import { Login } from '../containers/Login';
import { RecoveryPassword } from '../containers/RecoveryPassword';

function App() {
  return (
    <BrowserRouter>
      <switch>
        <Layout>
          <Route exact path="/" component={Login} />
          <Route exact path="/recovery-password" component={RecoveryPassword} />
          <Route component={NotFound} />
        </Layout>
      </switch>
    </BrowserRouter>
  )
}

export default App
