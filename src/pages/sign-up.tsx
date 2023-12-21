import { Button, Form, Input, Layout, Typography } from 'antd';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { AppRoutesPath } from '../router/types';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../store/store-hooks';
import { useAppDispatch } from '../store/store-hooks';
import { registerUser } from '../store/reducers/auth/auth-actions';

const { Title } = Typography;

interface FormValues {
  username: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const dispatch = useAppDispatch();

  const { loading, userInfo, error, success } = useAppSelector(
    (state) => state.auth
  );

  const { control, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    data.email = data.email.toLowerCase();
    dispatch(registerUser(data));
  };

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
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Username"
                rules={{ required: 'Username is required' }}
              />
            )}
          />
        </Form.Item>
        <Form.Item>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Email"
                rules={{ required: 'Email is required' }}
              />
            )}
          />
        </Form.Item>
        <Form.Item>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input.Password
                {...field}
                placeholder="Password"
                rules={{ required: 'Password is required' }}
              />
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
