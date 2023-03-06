import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { server } from '../apis/APIUtils';

function PrivateRoutes() {

    const [component, setComponent] = useState(null);

    useEffect(() => {
        checkRole()
    }, [])

    const checkRole = async () => {
        const key = localStorage.getItem("access_token");
        console.log(key)
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
                setComponent(<Navigate to="/login"></Navigate>)
            })
    }


    return component
}

export default PrivateRoutes