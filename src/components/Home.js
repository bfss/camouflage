import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { Divider, Stack } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { server } from '../apis/APIUtils';

function Home() {
  const [articles, setArticles] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${server}/article`)
      .then((response) => {
        console.log(response.data)
        setArticles(response.data)
      })
  }, [])

  const handleClick = (id) => {
    navigate(`article/${id}`)
  }

  return (
    <Container>
      <Stack spacing={2} mt={2}>
        <Typography variant='h2'>文章目录</Typography>
        <Divider />

        {articles.map(article =>
          <a key={article.id} onClick={() => handleClick(article.id)}>{article.title}</a>
        )}
      </Stack>

    </Container>
  );
}

export default Home