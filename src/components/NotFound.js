import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function NotFound() {
  return (
    <Box sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: 20
    }}>
        <Typography variant='h3'>散了吧，这里什么也没有</Typography>
    </Box>
  )
}

export default NotFound