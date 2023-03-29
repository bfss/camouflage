import React, { useState } from 'react'
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { server } from '../apis/APIUtils';

function Login() {

  const navigate = useNavigate()
  const [error, setError] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget)
    await axios
      .post(`${server}/login`, data)
      .then((response) => {
        localStorage.setItem('access_token', response.data.access_token);
        navigate("/edit")
      })
      .catch((response) => {
        setError(true)
      })
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
        {error &&
          <Alert severity="error" variant="outlined">检查你的用户名和密码</Alert>
        }
        <TextField
          margin='normal'
          fullWidth
          required
          label='用户名'
          name='username'
          type='text'
        />
        <TextField
          margin='normal'
          fullWidth
          required
          label='密码'
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
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          北方素素
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Container>

  )
}

export default Login