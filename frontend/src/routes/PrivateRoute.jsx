import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children, isLogged }) => {
  const location = useLocation()

  if (!isLogged) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export default PrivateRoute
