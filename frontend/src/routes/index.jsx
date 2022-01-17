import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import Home from 'Pages/Home'
import Login from 'Pages/Login'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Switch>
  </BrowserRouter>
)

export default Routes
