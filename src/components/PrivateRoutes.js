import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { server } from '../apis/APIUtils';

function PrivateRoutes() {

    const location = useLocation();

    const [component, setComponent] = useState(null);

    useEffect(() => {
        checkRole()
    }, [])

    const checkRole = async () => {
        const key = localStorage.getItem("access_token");
        const config = {
            headers: {
                "Authorization": key
            }
        }
        await axios
            .get(`${server}/checkout`, config)
            .then(response => {
                setComponent(<Outlet />)
            })
            .catch((response) => {
                setComponent(<Navigate to="/login" state={{ from: location }}></Navigate>)
            })
    }


    return component
}

export default PrivateRoutes