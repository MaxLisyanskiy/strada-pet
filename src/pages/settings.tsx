import { Input, Button, Layout, Typography, Form } from 'antd';
import { useForm, Controller } from 'react-hook-form';
const { Title } = Typography;
const { TextArea } = Input;

const SettingsPage = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Layout
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Title>Your Settings</Title>
      <Form
        size="large"
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '500px',
          width: '100%',
        }}
        onFinish={handleSubmit(onSubmit)}
      >
        <Form.Item>
          <Controller
            name="profilePicture"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder="URL of profile picture" />
            )}
          />
        </Form.Item>
        <Form.Item>
          <Controller
            name="username"
            control={control}
            render={({ field }) => <Input {...field} placeholder="Username" />}
          />
        </Form.Item>
        <Form.Item>
          <Controller
            name="bio"
            control={control}
            render={({ field }) => (
              <TextArea {...field} placeholder="Short bio about you" rows={4} />
            )}
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
            name="newPassword"
            control={control}
            render={({ field }) => (
              <Input {...field} type="password" placeholder="New Password" />
            )}
          />
        </Form.Item>
        <Form.Item style={{ alignSelf: 'flex-end' }}>
          <Button type="primary" htmlType="submit">
            Update Settings
          </Button>
        </Form.Item>
        <Form.Item style={{ alignSelf: 'flex-start' }}>
          <Button danger>Or click here to logout</Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default SettingsPage;
