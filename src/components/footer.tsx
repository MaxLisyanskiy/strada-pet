import { Typography, Layout, Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { GITHUB_URL, GITHUB_USERNAME } from '../shared/constants';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px',
        flex: '0 0 auto',
      }}
    >
      <a href="https://strada.one/" target="_blank">
        <img
          style={{ height: '55px', width: '144px' }}
          src="	https://strada.one/_next/image?url=%2Fimg%2Flanding%2Flogo.png&w=256&q=75"
          alt="страда"
        />
      </a>

      <Typography
        style={{
          fontSize: '22px',
          fontWeight: '500',
        }}
      >
        Strada pet ©2023
      </Typography>
      <div>
        <Typography
          style={{ textAlign: 'center', fontSize: '18px', fontWeight: '700' }}
        >
          OUR TEAM
        </Typography>
        <Space wrap size={14}>
          {GITHUB_USERNAME.map((username) => (
            <a key={username} href={GITHUB_URL + username} target="_blank">
              <Avatar
                size="large"
                icon={<UserOutlined />}
                src={`https://github.com/${username}.png`}
                style={{ border: '2px solid #ffffff' }}
              />
            </a>
          ))}
        </Space>
      </div>
    </Footer>
  );
};

export default AppFooter;
