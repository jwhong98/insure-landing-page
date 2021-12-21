import React from "react";
import { VscThreeBars } from "react-icons/vsc";

import Logo from "../Logo";
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavButton,
} from "./NavbarElements";
const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavbarContainer>
        <Logo />
        <MobileIcon onClick={toggle}>
          <VscThreeBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink>how we work</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>account</NavLink>
          </NavItem>
          <NavItem>
            <NavButton>view plans</NavButton>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
