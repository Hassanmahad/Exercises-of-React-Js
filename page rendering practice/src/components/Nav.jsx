import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <NavLink to="/"
        className={({ isActive }) => (isActive ? 'font-bold underline' : undefined)}
        >Home</NavLink> 
        
        | <NavLink to="/about"
        className={({ isActive }) => (isActive ? 'font-bold underline' : undefined)}
        >About</NavLink> |{" "}
        
        <NavLink to="/contact"
        className={({ isActive }) => (isActive ? 'font-bold underline' : undefined)}
        >Contact</NavLink>
       
        <NavLink to="/NotFound"
        className={({ isActive }) => (isActive ? 'font-bold underline' : undefined)}
        >NotFound</NavLink>
      </nav>{" "}
    </div>
  );
};

export default Nav;
