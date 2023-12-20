import { Button, Form, Input, Layout, Typography } from 'antd';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AppRoutesPath } from '../router/types';
import { Link } from 'react-router-dom';

const { Title } = Typography;
const { Item } = Form;

interface FormValues {
  username: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <Layout
      style={{
        alignItems: 'center',
      }}
    >
      <Layout style={{ textAlign: 'center', marginBottom: '30px' }}>
        <Title level={3}>Sign Up</Title>
        <Link
          style={{ textDecoration: 'none', color: 'lightblue' }}
          to={AppRoutesPath.SIGN_IN}
        >
          Have an account?
        </Link>
      </Layout>
      <Form
        name="basic"
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 500,
        }}
        autoComplete="off"
        size="large"
        onFinish={handleSubmit(onSubmit)}
      >
        <Item>
          <Input
            {...register('username', { required: 'Username is required' })}
            placeholder="Username"
          />
        </Item>
        <Item>
          <Input
            {...register('email', {
              required: 'Email is required',
            })}
            placeholder="Email"
          />
        </Item>
        <Item>
          <Input.Password
            {...register('password', { required: 'Password is required' })}
            placeholder="Password"
          />
        </Item>

        <Item style={{ alignSelf: 'flex-end' }}>
          <Button type="primary">Sign up</Button>
        </Item>
      </Form>
    </Layout>
  );
};

export default SignUp;
