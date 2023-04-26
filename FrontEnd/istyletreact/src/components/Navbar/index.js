
import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/">
          I-styleT
          </NavLink>
          <NavLink to="/applications">
          Applications
          </NavLink>
          <NavLink to="/knowledge">
          Knowledge
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