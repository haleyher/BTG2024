// NavbarComponent.js
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown"; // Import NavDropdown

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Project Uplift</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            {/* Add a dropdown for Resources */}
            <NavDropdown title="Resources" id="resources-dropdown">
              <NavDropdown.Item href="/resources">Resources</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/resources/FinancialMentorshipProgram">Financial Mentorship Program</NavDropdown.Item>
              <NavDropdown.Item href="/resources/mutualaidprogram">Mutual Aid Prgram</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
