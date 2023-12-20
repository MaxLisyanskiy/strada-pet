import { Typography, Layout, Avatar, Space } from 'antd';
import { GITHUB_URL, GITHUB_USERNAME } from '../../shared/constants';
import { useAppSelector } from '../../store/store-hooks';
import './footer.css';

const { Footer } = Layout;

const AppFooter = () => {
  const userTheme = useAppSelector((state) => state.theme.userTheme);
  const backgroundColor = userTheme ? '#141414' : '#474A51';
  return (
    <Footer className="footer" style={{ backgroundColor: backgroundColor }}>
      <a href="https://strada.one/" target="_blank">
        <img
          className="footer__logo"
          src="	https://strada.one/_next/image?url=%2Fimg%2Flanding%2Flogo.png&w=256&q=75"
          alt="страда"
        />
      </a>

      <Typography className="footer__title">Strada pet ©2023</Typography>
      <div>
        <Typography className="footer__team">OUR TEAM</Typography>
        <Space wrap size={14}>
          {GITHUB_USERNAME.map((username) => (
            <a key={username} href={GITHUB_URL + username} target="_blank">
              <Avatar
                className="avatar"
                src={`https://github.com/${username}.png`}
              />
            </a>
          ))}
        </Space>
      </div>
    </Footer>
  );
};

export default AppFooter;
