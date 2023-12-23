import { Button, Form, Input, Typography, Layout } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { useState, useEffect, ChangeEvent } from 'react';
import { AppRoutesPath } from '../router/types';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/store-hooks';
import { setCurrentPath } from '../store/reducers/breadcrumbs/breadcrumb-slice';
import { loginUser } from '../store/reducers/auth/auth-actions';
import updateMetaData from '../utils/create-meta';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { yupValidator } from '../utils/yup-validator';

const { Title } = Typography;

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const initialValues = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [credentials, setCredentials] = useState(initialValues);

  const isSuccess = useAppSelector((state) => state.auth.success);
  const isError = useAppSelector((state) => state.auth.error);

  const dispatch = useAppDispatch();

  const onSubmit = async () => {
    try {
      await validationSchema.validate(credentials, { abortEarly: false });
      credentials.email = credentials.email.toLowerCase();
      dispatch(loginUser(credentials));
      toast.success('You have successfully logged in');
    } catch (error) {
      toast.dismiss();
      toast.error('Invalid email or password');
    }
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
  }, []); // eslint-disable-line

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
    // console.log(isSuccess);
    // if (isSuccess) {
    //   toast.dismiss();
    //   toast.success('You have successfully logged in');
    //   navigate(AppRoutesPath.MAIN);
    // }
    if (isError) {
      toast.dismiss();
      toast.error('Email or password is not found');
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
        <Title level={3}>Sign in</Title>
        <Link
          style={{ textDecoration: 'none', color: 'lightblue' }}
          to={AppRoutesPath.SIGN_UP}
        >
          Need an accout?
        </Link>
      </div>
      <Form
        form={form}
        name="basic"
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '500px',
          width: '100%',
        }}
        onFinish={onSubmit}
        initialValues={{ remember: true }}
        autoComplete="off"
        size="large"
      >
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
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default SignIn;
