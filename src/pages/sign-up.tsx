import { Button, Form, Input, Layout, Typography } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/store-hooks';
import { setCurrentPath } from '../store/reducers/breadcrumbs/breadcrumb-slice';
import { registerUser } from '../store/reducers/auth/auth-actions';
import updateMetaData from '../utils/create-meta';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { AppRoutesPath } from '../router/types';
import { yupValidator } from '../utils/yup-validator';

const { Title } = Typography;

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const initialValues = {
  username: '',
  email: '',
  password: '',
};

const SignUp = () => {
  const [credentials, setCredentials] = useState(initialValues);

  const isSuccess = useAppSelector((state) => state.auth.success);
  const isError = useAppSelector((state) => state.auth.error);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFinish = async () => {
    try {
      await validationSchema.validate(credentials, { abortEarly: false });
      const data = { ...credentials, email: credentials.email.toLowerCase() };
      dispatch(registerUser(data));
    } catch (error) {
      toast.error('Invalid email or password');
    }
  };

  updateMetaData({
    title: 'Sign-up | News App',
    description: 'Sign-up page',
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
              <Link to={AppRoutesPath.SIGN_UP}>Sign Up</Link>
            </>
          ),
        },
      ])
    );
  }, []); // eslint-disable-line

  const usernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      username: e.target.value,
    });
  };

  const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, email: e.target.value });
  };

  const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, password: e.target.value });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.dismiss();
      toast.success('You have successfully logged up');
      navigate(AppRoutesPath.MAIN);
    }
    if (isError) {
      toast.dismiss();
      toast.error('Username or email is already used');
    }
  }, [isSuccess, isError]); // eslint-disable-line

  const [form] = Form.useForm();
  const yupSync = yupValidator(validationSchema, form.getFieldsValue);

  return (
    <Layout
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '50px 10px 0 10px',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <Title level={3}>Sign Up</Title>
        <Link
          style={{ textDecoration: 'none', color: 'lightblue' }}
          to={AppRoutesPath.SIGN_IN}
        >
          Have an account?
        </Link>
      </div>
      <Form
        form={form}
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        size="large"
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '500px',
          width: '100%',
        }}
      >
        <Form.Item name="username" rules={[yupSync]} hasFeedback>
          <Input
            onChange={usernameChange}
            value={credentials.username}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item name="email" rules={[yupSync]} hasFeedback>
          <Input
            onChange={emailChange}
            value={credentials.email}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item name="password" rules={[yupSync]} hasFeedback>
          <Input.Password
            onChange={passwordChange}
            value={credentials.password}
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item style={{ alignSelf: 'flex-end' }}>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default SignUp;
