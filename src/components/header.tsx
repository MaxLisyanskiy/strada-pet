import { Menu, Button, Avatar } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import ThemeSwitch from './theme-switch';
import { AppRoutesPath } from '../router/types';
import { useAppSelector } from '../store/store-hooks';

const AppHeader = () => {
  const loginStatus = useAppSelector((state) => state.auth.success);
  const username = useAppSelector((state) => state.auth.userInfo?.username);
  const userImage = useAppSelector((state) => state.auth.userInfo?.image);

  if (loginStatus === 200 || loginStatus === 201) {
    return (
      <header style={{ display: 'flex', padding: '0' }}>
        <Link to={AppRoutesPath.MAIN}>
          <img
            src="https://static.semrush.com/blog/uploads/media/17/48/17484f6f167c8596d4f7c97aa884172f/blog-post-templates.svg"
            alt="Your Alt Text"
            style={{
              width: '50px',
            }}
          />
        </Link>
        <Menu
          mode="horizontal"
          style={{
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center',
            flex: 1,
            width: '100%',
          }}
        >
          <Menu.Item key="main">
            <Button type="primary">
              <Link to={AppRoutesPath.MAIN}>To Home Page</Link>
            </Button>
          </Menu.Item>

          <Menu.Item key="new-post">
            <Button>
              <Link to={AppRoutesPath.NEW_POST}>
                <EditOutlined /> New Post
              </Link>
            </Button>
          </Menu.Item>

          <Menu.Item key="settings">
            <Button>
              <Link to={AppRoutesPath.SETTINGS}>
                Settings <SettingOutlined />
              </Link>
            </Button>
          </Menu.Item>

          <Menu.Item key="profile">
            <Link to={AppRoutesPath.PROFILE}>
              <Avatar
                style={{ width: '25px', height: '25px', marginRight: '5px' }}
                src={userImage}
              />
              {username}
            </Link>
          </Menu.Item>
          <Menu.Item key="themeSwitch">
            <ThemeSwitch />
          </Menu.Item>
        </Menu>
      </header>
    );
  }

  return (
    <header style={{ display: 'flex', padding: '0' }}>
      <Link to={AppRoutesPath.MAIN}>
        <img
          src="https://static.semrush.com/blog/uploads/media/17/48/17484f6f167c8596d4f7c97aa884172f/blog-post-templates.svg"
          alt="Your Alt Text"
          style={{
            width: '50px',
          }}
        />
      </Link>
      <Menu
        mode="horizontal"
        style={{
          display: 'flex',
          justifyContent: 'right',
          alignItems: 'center',
          flex: 1,
          width: '100%',
        }}
      >
        <Menu.Item key="main">
          <Button type="primary">
            <Link to={AppRoutesPath.MAIN}>To Home Page</Link>
          </Button>
        </Menu.Item>
        <Menu.Item key="sign-in">
          <Button>
            <Link to={AppRoutesPath.SIGN_IN}>Sign In</Link>
          </Button>
        </Menu.Item>
        <Menu.Item key="sign-up">
          <Button>
            <Link to={AppRoutesPath.SIGN_UP}>Sign Up</Link>
          </Button>
        </Menu.Item>

        <Menu.Item key="themeSwitch">
          <ThemeSwitch />
        </Menu.Item>
      </Menu>
    </header>
  );
};

export default AppHeader;
