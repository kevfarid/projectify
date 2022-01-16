import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import Home from 'Pages/Home'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" element={<Home />} />
    </Switch>
  </BrowserRouter>
)

export default Routes
