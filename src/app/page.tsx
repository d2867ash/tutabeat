import Image from "next/image";
import {Navbar, Nav,Container,NavLink,NavbarToggle, NavBarBrand,NavbarCollapse, NavDropdownDivider,NavDropdownItem, NavDropdown} from "./components/BootstrapClient";
import { Component } from "react";
import Texteditor from "./components/Texteditor";


// or less ideally

export default function Home() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary bg-dark">
      <Container>
        <NavBarBrand href="#home">TutaBeat</NavBarBrand>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#link">Link</NavLink>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdownItem href="#action/3.1">Action</NavDropdownItem>
              <NavDropdownItem href="#action/3.2">
                Another action
              </NavDropdownItem>
              <NavDropdownItem href="#action/3.3">Something</NavDropdownItem>
              <NavDropdownDivider />
              <NavDropdownItem href="#action/3.4">
                Separated link
              </NavDropdownItem>
            </NavDropdown>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
    <div className="container mb-1">
    <Texteditor/>
    </div>
    </>
  );
}
