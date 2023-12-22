import { Button, Form, Input, Layout, Typography } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { AppRoutesPath } from '../router/types';
import { Link } from 'react-router-dom';
// import { useAppSelector } from '../store/store-hooks';
import { useAppDispatch } from '../store/store-hooks';
import { useEffect } from 'react';
import { setCurrentPath } from '../store/reducers/breadcrumbs/breadcrumb-slice';
import { registerUser } from '../store/reducers/auth/auth-actions';

const { Title } = Typography;

interface SignUpFormValues {
  username: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  // const { error } = useAppSelector((state) => state.auth);
  const { control, handleSubmit } = useForm<SignUpFormValues>();

  const onSubmit: SubmitHandler<SignUpFormValues> = (data) => {
    data.email = data.email.toLowerCase();
    dispatch(registerUser(data));
  };

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
  }, []);

  return (
    <Layout
      style={{
        alignItems: 'center',
        paddingTop: '50px',
      }}
    >
      <Title level={3}>Sign Up</Title>
      <Link
        style={{ textDecoration: 'none', color: 'lightblue' }}
        to={AppRoutesPath.SIGN_IN}
      >
        Have an account?
      </Link>

      <Form
        name="basic"
        style={{
          marginTop: '30px',
          display: 'flex',
          flexDirection: 'column',
          width: 500,
        }}
        autoComplete="off"
        size="large"
        onFinish={handleSubmit(onSubmit)}
      >
        <Form.Item>
          <Controller
            name="username"
            control={control}
            render={({ field }) => <Input {...field} placeholder="Username" />}
          />
        </Form.Item>
        <Form.Item>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <Input {...field} placeholder="Email" />}
          />
        </Form.Item>
        <Form.Item>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input.Password {...field} placeholder="Password" />
            )}
          />
        </Form.Item>

        <Form.Item style={{ alignSelf: 'flex-end' }}>
          <Button type="primary" htmlType="submit">
            Sign up
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default SignUp;
