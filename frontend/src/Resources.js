// resources.js
import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Resources() {
  return (

    <>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/">IdeaBoard</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/about">About</Nav.Link>
                {/* Add a dropdown for Resources */}
                <NavDropdown title="Resources" id="resources-dropdown">
                  <NavDropdown.Item href="/resources/guide">Guides</NavDropdown.Item>
                  <NavDropdown.Item href="/resources/tutorials">Tutorials</NavDropdown.Item>
                  <NavDropdown.Item href="/resources/tools">Tools</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/resources/community">
                    Community Resources
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>


    <div>
      <h1>Resources</h1>
      <p>Here you can find various resources to assist with your projects!</p>
    </div>
    </>
  );
}

export default Resources;
