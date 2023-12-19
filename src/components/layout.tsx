import { Link, Outlet } from 'react-router-dom';
import { AppRoutesPath } from '../router/types';
import AppHeader from './header';

const Layout = () => {
  return (
    <>
      <AppHeader />

      <main>
        <Outlet />
      </main>

      <footer>2023</footer>
    </>
  );
};

export default Layout;
