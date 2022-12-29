import React from 'react'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { Navigate, useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget)
    if (data.get("email") === "123@123.123" && data.get("password") === "123") {
      // localStorage.setItem('key', "123");
      sessionStorage.setItem("key", "123")
      navigate("/")
    }
  }

  return (
    <Container maxWidth="xs" component="main">
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 10,
      }}
        component="form"
        onSubmit={handleSubmit}>
        <Typography variant='h4'>登录</Typography>
        <TextField
          margin='normal'
          fullWidth
          label='邮箱地址'
          name='email'
          type='email'
        />
        <TextField
          margin='normal'
          fullWidth
          label='登陆密码'
          name='password'
          type='password'
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          登录
        </Button>
      </Box>
    </Container>

  )
}

export default Login