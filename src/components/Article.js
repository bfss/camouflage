import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import axios from 'axios';
import { server } from '../apis/APIUtils';
import { Container, Divider } from '@mui/material';
import { Stack } from '@mui/system';
import "./Article.css"

function Article() {

  const { id } = useParams()

  const [article, setArticle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${server}/article/${id}`)
        .then((response) => {
          setArticle(response.data)
        })
    }
    fetchData()
  }, [])

  useEffect(() => {
    window.Prism?.highlightAll()
  }, [article])

  return (
    <Container>
      <Stack spacing={2} mt={2}>
        <Typography variant='h4'>{article.title}</Typography>
        <Divider />
        <Box className='article' dangerouslySetInnerHTML={{ __html: article.content }} />
      </Stack>

    </Container>

  )
}

export default Article