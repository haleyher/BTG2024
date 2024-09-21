import "./App.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function generator() {

    var email = "timthebeaver@gmail.com";
   
  
    return (
      <>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/">IdeaBoard</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/about">About</Nav.Link>

                <NavDropdown title="Resources" id="resources-dropdown">
                  <NavDropdown.Item href="/resources/guide">Guides</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/resources/tutorials">Tutorials</NavDropdown.Item>
                  <NavDropdown.Item href="/resources/tools">Tools</NavDropdown.Item>
                  
                  <NavDropdown.Item href="/resources/community">
                    Community Resources
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
              
            </Navbar.Collapse>
          </Container>
        </Navbar>
  
        <h1>About IdeaBoard</h1>
        <div className="card"></div>
        
        <h2>Usage</h2>
        <p className="textSection">
          To assist in brainstorming coding ideas!
          <br/><br/>In conjunction with our hardware, our website can provide users with new coding ideas.
          Number of people working on a project and amount of time available are taken into account to provide projects with corresponding difficulty.
        </p>
  
        <h2>Purpose</h2>
        <p className="textSection">
          We hope to increase Computer Science engagement, specifically in middle school kids. 
          <br/><br/>
          The first hurdle most people have to combat is ideation. As STEM Mentors, we encourage young students to jump right into a project, instead of getting stuck on creating the "perfect idea".
        </p>
  
        <h2>Our Team</h2>
        <p className="textSection">Team Members from Left to Right: Haley, Jaiden (Honorable mention from a different team), Jaden, and Alex. Not in picture: Jesse.</p>
        <p className="textSection"><b>Big thank you to Blueprint for bringing this team together at MIT!</b></p>
      </>
    );
}
  
  export default generator;