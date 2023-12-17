import { Link, Outlet } from 'react-router-dom'

export function Layout() {
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

      <Outlet />

      <footer>2023</footer>
    </>
  )
}
