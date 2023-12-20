import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Footer from './footer/footer';
import AppHeader from './header';

const LayoutApp = () => {
  return (
    <Layout
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <AppHeader />
      <main
        style={{
          flex: '1',
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </Layout>
  );
};

export default LayoutApp;
