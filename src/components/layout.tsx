import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">
          <button>To Main Page</button>
        </Link>
        <Link to="/ParagraphDetails">
          <button>To Paragraph Details</button>
        </Link>
        <Link to="/Profile">
          <button>To Profile</button>
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
