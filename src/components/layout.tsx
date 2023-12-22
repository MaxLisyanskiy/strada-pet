import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Footer from './footer/footer';
import AppHeader from './header';
import BreadcrumbItem from './breadcrumb';
import { useAppSelector } from '../store/store-hooks';

const { Content } = Layout;

const LayoutApp = () => {
  const userTheme = useAppSelector((state) => state.theme.userTheme);
  const backgroundColor = userTheme ? '#141414' : '#ffffff';
  const notificationColor = userTheme ? '#ffffff' : '#141414';
  return (
    <Layout
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <AppHeader />

      <BreadcrumbItem />
      <Content style={{ flex: 1 }}>
        <Toaster
          toastOptions={{
            className: '',
            style: {
              padding: '16px',
              color: notificationColor,
              backgroundColor: backgroundColor,
              WebkitBoxShadow: '-1px 8px 50px 17px rgba(11, 36, 56, 0.34)',
              MozBoxShadow: '-1px 8px 50px 17px rgba(11, 36, 56, 0.34)',
              boxShadow: '-1px 8px 50px 17px rgba(11, 36, 56, 0.34)',
            },
          }}
        />
        <Outlet />
      </Content>

      <Footer />
    </Layout>
  );
};

export default LayoutApp;
