import { Link, Outlet } from 'react-router-dom';
import { AppRoutesPath } from '../router/types';

const Layout = () => {
  return (
    <>
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

      <main>
        <Outlet />
      </main>

      <footer>2023</footer>
    </>
  );
};

export default Layout;
