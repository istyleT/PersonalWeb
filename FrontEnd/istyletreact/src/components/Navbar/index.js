
import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/">
          Home
          </NavLink>
          <NavLink to="/knowledge">
          Learn
          </NavLink>
          <NavLink to="/applications">
          Apps
          </NavLink>
          <NavLink to="/contact">
          Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;