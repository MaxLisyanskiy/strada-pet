import { Button, Form, Input, Typography, Layout } from 'antd';
import { useEffect, useState } from 'react';
import { ChangeEvent } from 'react';
import { AppRoutesPath } from '../router/types';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/store-hooks';
import { loginUser } from '../store/reducers/auth/auth-actions';
import toast from 'react-hot-toast';

const { Title } = Typography;

const initialValues = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [credentials, setCredentials] = useState(initialValues);
  const isSuccess = useAppSelector((state) => state.auth.success);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = () => {
    credentials.email = credentials.email.toLowerCase();
    dispatch(loginUser(credentials));
    toast.loading('Loading...');
    setTimeout(() => {
      if (!isSuccess) {
        toast.dismiss();
      }
    }, 3500);
  };

  const emailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      email: e.target.value,
    });
  };

  const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      password: e.target.value,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.dismiss();
      toast.success('you have successfully logged in');
      navigate(AppRoutesPath.MAIN);
    }
  }, [isSuccess]);

  return (
    <Layout
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '50px 10px 0 10px',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <Title level={3}>Sign In</Title>
        <Link
          style={{ textDecoration: 'none', color: 'lightblue' }}
          to={AppRoutesPath.SIGN_UP}
        >
          Need an account?
        </Link>
      </div>
      <Form
        name="basic"
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '500px',
          width: '100%',
        }}
        onSubmitCapture={onSubmit}
        initialValues={{ remember: true }}
        autoComplete="off"
        size="large"
      >
        <Form.Item>
          <Input
            onChange={emailChange}
            value={credentials.email}
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
          <Button type="primary" htmlType="submit">
            Sign in
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default SignIn;
