import React from "react";
import logoImage from "../Footer/images/CoWo.png";
import {Link} from 'react-router-dom';
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  DropdownList,
} from "./NavbarElements";


const Navbar = () => {


  return (
    <>
      <Nav>
        <Bars />
        <NavLogo to="/">
          <img src={logoImage}></img>
        </NavLogo>

        <NavMenu>
          <NavLink to="/" activeStyle={{ color: "black" }}>
            Home
          </NavLink>
          <NavLink to="/locations" activeStyle={{ color: "black" }}>
            Locations
          </NavLink>
          <NavLink to="/community" activeStyle={{ color: "black" }}>
            Community
          </NavLink>
          <NavLink to="/signin" activeStyle={{ color: "black" }}>
            Sign In
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;
