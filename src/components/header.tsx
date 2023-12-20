import { Menu, Button, Typography, Layout } from 'antd';
import { Link } from 'react-router-dom';
import ThemeSwitch from './theme-switch';
import { AppRoutesPath } from '../router/types';

const AppHeader = () => {
  return (
    <Layout>
      <div
        style={{
          display: 'flex',
        }}
      >
        <Menu
          mode="horizontal"
          style={{
            padding: '20px',
          }}
        >
          <Typography
            style={{
              marginLeft: '15px',
              fontSize: '26px',
            }}
          >
            <Link to={AppRoutesPath.MAIN}>
              <img
                src="https://static.semrush.com/blog/uploads/media/17/48/17484f6f167c8596d4f7c97aa884172f/blog-post-templates.svg"
                alt="Your Alt Text"
                style={{
                  width: '50px',
                }}
              />
            </Link>
          </Typography>
        </Menu>

        <Menu
          mode="horizontal"
          style={{
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center',
            flex: 1,
          }}
        >
          <Menu.Item key="signup">
            <Button type="primary">
              <Link to={AppRoutesPath.MAIN}>To Home Page</Link>
            </Button>
          </Menu.Item>
          <Menu.Item key="signin">
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
      </div>
    </Layout>
  );
};

export default AppHeader;
