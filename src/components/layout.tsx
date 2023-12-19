import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import Footer from './footer';
import AppHeader from './header';

const LayoutApp = () => {
  return (
    <Layout
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <AppHeader />

      <main style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
        <Outlet />
      </main>

      <Footer />
    </Layout>
  );
};

export default LayoutApp;
