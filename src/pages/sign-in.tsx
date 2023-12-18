import { useState } from 'react';
import { ChangeEvent } from 'react';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';
const { Title } = Typography;

const initialValues = {
  username: '',
  password: '',
};

const SignIn = () => {
  const [credentials, setCredentials] = useState(initialValues);

  const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      username: e.target.value,
    });
  };

  const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      password: e.target.value,
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <Title level={2}>Sign In</Title>
        <Link
          style={{ textDecoration: 'none', color: 'lightblue' }}
          to="/SignUp"
        >
          Need an account?
        </Link>
      </div>
      <Form
        name="basic"
        style={{ display: 'flex', flexDirection: 'column', width: 500 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        size="large"
      >
        <Form.Item>
          <Input
            onChange={usernameChange}
            value={credentials.username}
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item>
          <Input.Password
            onChange={passwordChange}
            value={credentials.password}
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item style={{ alignSelf: 'flex-end' }}>
          <Button ghost type="primary" htmlType="submit">
            Sign in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;
