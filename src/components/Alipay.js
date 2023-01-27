import React from 'react'
import Box from '@mui/material/Box'

function Alipay() {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 3,
        }}>
            <img
                src={process.env.PUBLIC_URL + 'alipay.jpg'}
                loading="lazy"
                height={650}
            >
            </img>
        </Box>

    )
}

export default Alipay