import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function PrivateRoutes() {
    const key = sessionStorage.getItem("key")
    return (
        key === "123" ? <Outlet /> : <Navigate to="/login"></Navigate>
    )
}

export default PrivateRoutes