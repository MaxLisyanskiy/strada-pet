import { Button, Form, Input, Layout } from 'antd';
import './new-post.css';
import { ChangeEvent, useState } from 'react';

const initialValues = {
  article__title: '',
  article__about: '',
  article: '',
  tags: '',
};

const NewPost = () => {
  const [post, setPost] = useState(initialValues);

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
