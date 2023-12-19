import { Link, Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { AppRoutesPath } from '../router/types';
import Footer from './footer';

const LayoutApp = () => {
  return (
    <Layout
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <header>
        <Link to={AppRoutesPath.MAIN}>
          <button>To Main Page</button>
        </Link>
        <Link to={AppRoutesPath.PARAGRAPH_DETAILS}>
          <button>To Paragraph Details</button>
        </Link>
        <Link to={AppRoutesPath.PROFILE}>
          <button>To Profile</button>
        </Link>
        <Link to={AppRoutesPath.SIGN_IN}>
          <button>Sign In</button>
        </Link>
      </header>
      <main style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
        <Outlet />
      </main>
      <Footer />
    </Layout>
  );
};

export default LayoutApp;
