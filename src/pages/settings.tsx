import { Input, Button, Layout, Typography, Form, Modal } from 'antd';
import { SettingOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import { useForm, Controller } from 'react-hook-form';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAppDispatch, useAppSelector } from '../store/store-hooks';
import NotAuthPage from '../components/not-auth-page';
import { setCurrentPath } from '../store/reducers/breadcrumbs/breadcrumb-slice';
import { AppRoutesPath } from '../router/types';
import updateMetaData from '../utils/create-meta';
import { resetAuthState } from '../store/reducers/auth/auth-slice';

const { Title } = Typography;

interface SettingsFormData {
  profilePicture: string;
  username: string;
  bio: string;
  email: string;
  newPassword: string;
}

const SettingsPage: React.FC = () => {
  const { control, handleSubmit } = useForm<SettingsFormData>();
  const { userInfo } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (data: SettingsFormData) => {
    console.log(data);
  };

  const logoutClick = () => {
    dispatch(resetAuthState());
    navigate(AppRoutesPath.MAIN);
    toast.success(
      "You have successfully logged out of your account.. We'll miss you!"
    );
  };

  updateMetaData({
    title: 'Settings | News App',
    description: 'Settings page',
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
              <UserOutlined /> <Link to={AppRoutesPath.PROFILE}>Profile</Link>
            </>
          ),
        },
        {
          title: (
            <>
              <SettingOutlined />
              <Link to={AppRoutesPath.SETTINGS}>Settings</Link>
            </>
          ),
        },
      ])
    );
  }, []); // eslint-disable-line

  const confirmLogout = () => {
    Modal.confirm({
      title: 'Logout window',
      content: (
        <div>
          <p>Are you sure you want to log out?</p>
        </div>
      ),
      onOk() {
        logoutClick();
      },
    });
  };

  return (
    <>
      {!userInfo ? (
        <NotAuthPage />
      ) : (
        <Layout
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '50px 10px 0 10px',
          }}
        >
          <Title level={3}>Your Settings</Title>
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
                defaultValue={userInfo.image}
                disabled
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="URL of profile picture" />
                )}
              />
            </Form.Item>
            <Form.Item>
              <Controller
                name="username"
                defaultValue={userInfo.username}
                disabled
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Username" />
                )}
              />
            </Form.Item>
            <Form.Item>
              <Controller
                name="email"
                defaultValue={userInfo.email}
                disabled
                control={control}
                render={({ field }) => <Input {...field} placeholder="Email" />}
              />
            </Form.Item>
            <Form.Item style={{ alignSelf: 'flex-start' }}>
              <Button danger onClick={confirmLogout}>
                Or click here to logout
              </Button>
            </Form.Item>
          </Form>
        </Layout>
      )}
    </>
  );
};

export default SettingsPage;
