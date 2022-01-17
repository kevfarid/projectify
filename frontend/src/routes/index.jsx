import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import Home from 'Pages/Home'
import Login from 'Pages/Login'
import Project from '../pages/Project'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<Project />} />
    </Switch>
  </BrowserRouter>
)

export default Routes
