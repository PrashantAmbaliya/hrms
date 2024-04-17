import React from 'react'
import { useNavigate } from 'react-router-dom'

function DashboardProtectedRoutes({children}) {
  const navigate = useNavigate();
  const token = localStorage.getItem('token')
  const userData = JSON.parse(localStorage.getItem('userData'))

  if(!token || !userData){
    navigate('/dashboard');
  }

  return children
}

export default DashboardProtectedRoutes