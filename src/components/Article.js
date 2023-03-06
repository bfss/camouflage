import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography'
import axios from 'axios';
import { server } from '../apis/APIUtils';
import { Container, Divider } from '@mui/material';
import { Stack } from '@mui/system';

function Article() {

  const { id } = useParams()

  const [article, setArticle] = useState("");

  useEffect(() => {
    axios
      .get(`${server}/article/${id}`)
      .then((response) => {
        setArticle(response.data)
      })
  }, [])

  return (
    <Container>
      <Stack spacing={2} mt={2}>
        <Typography variant='h2'>{article.title}</Typography>
        <Divider />
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </Stack>

    </Container>

  )
}

export default Article