import { Menu, Button, Typography, Layout } from 'antd';

import { Link } from 'react-router-dom';
import ThemeSwitch from './theme-switch';

const AppHeader = () => {
  return (
    <Layout style={{}}>
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
            <Link to="/"> Logo</Link>
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
              <Link to="/">To Home Page</Link>
            </Button>
          </Menu.Item>
          <Menu.Item key="signin">
            <Button>
              <Link to="/sign-in">Sign In</Link>
            </Button>
          </Menu.Item>
          <Menu.Item key="sinup">
            <Button>
              <Link to="/sign-in">Sign Up</Link>
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
