import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function PrivateRoutes() {

    const [component, setComponent] = useState(null);

    useEffect(() => {
        const key = sessionStorage.getItem("key");
        if (key === "123") {
            setComponent(<Outlet />)
        } else {
            setComponent(<Navigate to="/login"></Navigate>)
        }
    }, [])
    
    /*
    const checkRole = async () => {
        const key = sessionStorage.getItem("key");
        await axios
            .get("url")
            .then(response => {
                if (response.data.data === key) {
                    setComponent(<Outlet />)
                } else {
                    setComponent(<Navigate to="/login"></Navigate>)
                }
            })
    }
    */

    return component
}

export default PrivateRoutes