import { Menu, Button, Avatar } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { EditOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import ThemeSwitch from './theme-switch';
import { AppRoutesPath } from '../router/types';
import { useAppSelector } from '../store/store-hooks';

const AppHeader = () => {
  const { userInfo } = useAppSelector((state) => state.auth);
  const username = useAppSelector((state) => state.auth.userInfo?.username);
  const userImage = useAppSelector((state) => state.auth.userInfo?.image);

  const location = useLocation();

  const selectedKey = (() => {
    if (location.pathname === AppRoutesPath.MAIN) {
      return 'main';
    } else if (location.pathname === AppRoutesPath.NEW_POST) {
      return 'new-post';
    } else if (location.pathname === AppRoutesPath.SETTINGS) {
      return 'settings';
    } else if (location.pathname === AppRoutesPath.PROFILE) {
      return 'profile';
    } else if (location.pathname === AppRoutesPath.SIGN_IN) {
      return 'sign-in';
    } else if (location.pathname === AppRoutesPath.SIGN_UP) {
      return 'sign-up';
    }

    return '';
  })();

  if (userInfo) {
    return (
      <header style={{ display: 'flex' }}>
        <Menu
          mode="horizontal"
          style={{
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center',
            flex: 1,
            width: '100%',
            padding: '15px',
          }}
          selectedKeys={[selectedKey]}
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
      <Menu
        mode="horizontal"
        style={{
          display: 'flex',
          justifyContent: 'right',
          alignItems: 'center',
          flex: 1,
          width: '100%',
        }}
        selectedKeys={[selectedKey]}
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
