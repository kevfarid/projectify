import React from 'react'
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from 'react-router-dom'

import Home from 'Pages/Home'
import Login from 'Pages/Login'
import Project from 'Pages/Project'
import useUser from 'Hooks/useUser'
import PrivateRoute from 'Routes/PrivateRoute'

const Routes = () => {
  const { isLogged } = useUser()
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/login"
          element={isLogged ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/project/:id"
          element={
            <PrivateRoute isLogged={isLogged}>
              <Project />
            </PrivateRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute isLogged={isLogged}>
              <Home />
            </PrivateRoute>
          }
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
