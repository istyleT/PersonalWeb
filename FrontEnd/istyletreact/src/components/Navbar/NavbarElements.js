// import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
export const Nav = styled.nav`
  background-color: rgba(0, 0, 0, 1);
  width: 100vw;
  height: 5vh;
  display: flex;
  justify-content: space-around;
  padding: 0.3rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;
  
export const NavLink = styled(Link)`
  color: rgba(255, 255, 255, .5);
  font-size: 1.3rem;
  font-weight: 700;
  background-color: transparent
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.25rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &.hover {
    color: #fff;
  }
  &.active {
    color: #fff;
    border-bottom: .10rem solid #fff;
  }

`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  // margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
     