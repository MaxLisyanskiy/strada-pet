import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">
          <button>To Main Page</button>
        </Link>
        <Link to="/paragraph-details">
          <button>To Paragraph Details</button>
        </Link>
        <Link to="/profile">
          <button>To Profile</button>
        </Link>
        <Link to="/sign-in">
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
