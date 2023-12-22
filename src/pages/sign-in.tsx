import { Button, Form, Input, Typography, Layout } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import toast from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { ChangeEvent } from 'react';
import { AppRoutesPath } from '../router/types';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/store-hooks';
import { setCurrentPath } from '../store/reducers/breadcrumbs/breadcrumb-slice';
import { loginUser } from '../store/reducers/auth/auth-actions';
import updateMetaData from '../utils/create-meta';

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

  updateMetaData({
    title: 'Sign-in | News App',
    description: 'Sign-in page',
  });

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
              <UserOutlined />
              <Link to={AppRoutesPath.SIGN_IN}>Sign In</Link>
            </>
          ),
        },
      ])
    );
  }, []);

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
