import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import { Button, Container } from '@mui/material';
import { Stack } from '@mui/material';
import { TextField } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { server } from '../apis/APIUtils';

function EditArticle() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${server}/article/${id}`)
        .then((response) => {
          setTitle(response.data.title)
          setContent(response.data.content)
        })
        .catch((response) => {
          navigate("/*")
        })
    }
    if (id !== undefined) {
      fetchData()
    }
  }, [])

  const handleTitle = (event) => {
    setTitle(event.target.value)
  }

  const handleContent = (value) => {
    setContent(value)
  }

  const handleSubmit = async () => {
    const data = {
      "title": title,
      "content": content
    }
    const token = localStorage.getItem("access_token")
    const config = {
      headers: {
        'Authorization': token
      }
    }
    if (id === undefined) {
      await axios
        .post(`${server}/article`, data, config)
        .then((response) => {
          navigate(`/article/${response.data.id}`)
        })
    }
    else {
      await axios
        .patch(`${server}/article/${id}`, data, config)
        .then((response) => {
          navigate(`/article/${response.data.id}`)
        })
    }

  }

  return (
    <Container>
      <Stack spacing={2}>
        <TextField
          margin='normal'
          fullWidth
          required
          label='标题'
          name='title'
          type='text'
          onChange={handleTitle}
          value={title}
        />
        <Editor
          // tinymceScriptSrc={process.env.PUBLIC_URL + 'custome/tinymce/tinymce.min.js'}
          value={content}
          init={{
            height: 500,
            // 禁用菜单栏
            menubar: false,
            // 禁用右键菜单
            contextmenu: false,
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
              'anchor', 'searchreplace', 'visualblocks', 'codesample', 'fullscreen',
              'insertdatetime', 'media', 'table', 'preview', 'wordcount'
            ],
            toolbar: 'undo redo | blocks | ' +
              'bold italic forecolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent ' +
              'codesample',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            language: 'zh-Hans',
            codesample_global_prismjs: true,
            codesample_languages: [
              { text: 'Python', value: 'python' },
              { text: 'HTML/XML', value: 'markup' },
              { text: 'JavaScript', value: 'javascript' },
              { text: 'CSS', value: 'css' },
              { text: 'Java', value: 'java' },
              { text: 'C#', value: 'csharp' },
              { text: 'C++', value: 'cpp' }
            ],
          }}
          onEditorChange={handleContent}
        />

        <Button onClick={handleSubmit}>提交</Button>
      </Stack>
    </Container>
  );
}

export default EditArticle