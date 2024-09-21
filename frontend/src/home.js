import "./App.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function generator() {

    var email = "timthebeaver@gmail.com";
   
  
    return (
      <>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">IdeaBoard</Navbar.Brand>
  
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/resources">Resources</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                
              </Nav>
              <Navbar.Text className="email">
              Signed in as: <b> {email}</b>
            </Navbar.Text>
              
            </Navbar.Collapse>
          </Container>
        </Navbar>
  
        <h1>About IdeaBoard</h1>
        <div className="card"></div>
        
      {/* <div className="images">
        <img src={logo} className="logo"/>
        </div> */}
        <h2>Usage</h2>
        <p className="textSection">
          To assist in brainstorming coding ideas!
          <br></br> <br></br>In conjunction with our hardware, our website can provide users with new coding ideas.
          Number of people working on a project and amount of time available are taken into account to provide projects with corresponding difficulty.
          
          </p>
        <h2>Purpose</h2>
  
        <p className="textSection">
          We hope to increase Computer Science engagement, specifically in middle school kids. <br></br><br></br>
          
          The first hurdle most people have to combat is ideation. As STEM Mentors, we encourage young students to jump right into a project, instead of getting stuck on creating the "perfect idea". </p>
  
        <h2>Our Team</h2>
  
  
  
       {/*  */}
      
  <spacer/>
  
  <p className="textSection">Team Members from Left to Right: Haley, Jaiden (Honorable mention from a different team), Jaden, and Alex. Not in picture: Jesse.</p>
  
  <p className="textSection"> <b>Big thank you to Blueprint for bringing this team together at MIT!</b></p>
  <br/>
  
      </>
  
  
      //
    );
  }
  
  export default generator;