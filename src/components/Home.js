import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Divider, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { server } from '../apis/APIUtils';

function Home() {
  const [articles, setArticles] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${server}/article`)
        .then((response) => {
          setArticles(response.data)
        })
    }
    fetchData()
  }, [])

  const handleClick = (id) => {
    navigate(`article/${id}`)
  }

  return (
    <Container>
      <Stack spacing={2} mt={2}>
        <Typography variant='h4'>文章目录</Typography>
        <Divider />
        {articles.map(article =>
          <Card key={article.id} sx={{ mt: 5 }}>
            <CardHeader
              title={article.title}
              // subheader={Date.parse(article.timestamp)}
            />
            <CardActions>
              <Button size="small" onClick={() => handleClick(article.id)}>阅读全文</Button>
            </CardActions>
          </Card>
        )}
      </Stack>

    </Container>
  );
}

export default Home