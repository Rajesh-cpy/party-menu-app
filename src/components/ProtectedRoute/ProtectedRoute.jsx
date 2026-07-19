import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const token = localStorage.getItem('party_menu_token')

  if (!token) {
    return <Navigate to="/signin" replace />
  }

  return <Outlet />
}

export default ProtectedRoute
