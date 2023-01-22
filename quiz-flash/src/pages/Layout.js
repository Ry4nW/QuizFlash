import { Outlet, Link } from "react-router-dom";
import "../Header.css"

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Create</Link>
          </li>
          <li>
            <Link to="/contact">Your Library</Link>
          </li>          
          <li>
            <Link to="/room">Room</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
