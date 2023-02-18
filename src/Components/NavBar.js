import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="main-nav">
      <ul className="flex flex-row gap-2">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/random">Random</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
