import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Footer from './footer/footer';
import AppHeader from './header';
import BreadcrumbItem from './breadcrumb';

const { Content } = Layout;

const LayoutApp = () => {
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
        <Toaster />
        <Outlet />
      </Content>

      <Footer />
    </Layout>
  );
};

export default LayoutApp;
