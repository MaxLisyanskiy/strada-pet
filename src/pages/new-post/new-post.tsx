import { Button, Form, Input, Layout } from 'antd';
import { HomeOutlined, EditOutlined } from '@ant-design/icons';

import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from '../../store/store-hooks';
import { setCurrentPath } from '../../store/reducers/breadcrumbs/breadcrumb-slice';
import { AppRoutesPath } from '../../router/types';
import updateMetaData from '../../utils/create-meta';

import './new-post.css';

const initialValues = {
  article__title: '',
  article__about: '',
  article: '',
  tags: '',
};

const NewPost = () => {
  const [post, setPost] = useState(initialValues);

  updateMetaData({
    title: 'Create a new post | News App',
    description: 'Create new post page',
  });

  const onSubmit = () => {
    setPost(initialValues);
  };

  function handleChangeTitle(e: ChangeEvent<HTMLInputElement>) {
    setPost({
      ...post,
      article__title: e.target.value,
    });
  }
  function handleChangeAbout(e: ChangeEvent<HTMLInputElement>) {
    setPost({
      ...post,
      article__about: e.target.value,
    });
  }
  function handleChangeArticle(e: ChangeEvent<HTMLTextAreaElement>) {
    setPost({
      ...post,
      article: e.target.value,
    });
  }
  function handleChangeTags(e: ChangeEvent<HTMLInputElement>) {
    setPost({
      ...post,
      tags: e.target.value,
    });
  }

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setCurrentPath([
        {
          title: (
            <>
              <HomeOutlined />
              <Link to={AppRoutesPath.MAIN}>Home</Link>
            </>
          ),
        },
        {
          title: (
            <>
              <EditOutlined />
              <Link to={AppRoutesPath.SETTINGS}>New Post</Link>
            </>
          ),
        },
      ])
    );
  }, []);

  return (
    <Layout>
      <Form
        className="form__new-post"
        name="basic"
        initialValues={{ remember: true }}
        autoComplete="off"
        size="large"
        onSubmitCapture={onSubmit}
      >
        <Form.Item>
          <Input
            onChange={handleChangeTitle}
            value={post.article__title}
            placeholder="Article Title"
          />
        </Form.Item>

        <Form.Item>
          <Input
            onChange={handleChangeAbout}
            value={post.article__about}
            placeholder="What's this article about"
          />
        </Form.Item>
        <Form.Item>
          <Input.TextArea
            rows={5}
            onChange={handleChangeArticle}
            value={post.article}
            placeholder="Write your article (in markdown)"
          />
        </Form.Item>
        <Form.Item>
          <Input
            onChange={handleChangeTags}
            value={post.tags}
            placeholder="Enter tags"
          />
        </Form.Item>

        <Form.Item style={{ alignSelf: 'flex-end' }}>
          <Button type="primary" htmlType="submit">
            Publish Article
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default NewPost;
