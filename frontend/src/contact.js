import React from 'react';
import './Generator.css';

function Contact() {
  return (
    <>
      <section className="header-section text-center">
        <div className="container">
          <h1 className="main-title">Contact</h1>
          <p className="subtitle">Reach Out to the Creators</p>
        </div>
      </section>

      <div className="container">
        <h1 className="titlete">Our Team</h1>
     
            <strong>Haley Hernandez</strong> – <a href= "mailto: haleyher@mit.edu"> haleyher@mit.edu</a> <br></br>
          
            <strong>Rene Ramirez</strong> –  <a href= "mailto: reneramz@mit.edu"> reneramz@mit.edu</a><br></br>
         
            <strong>Fabian Ruiz</strong> –  <a href= "mailto: fabruiz@mit.edu"> fabruiz@mit.edu</a><br></br>
          
            <strong>Angie Fortuno</strong> –  <a href= "mailto: afortuno@mit.edu"> afortuno@mit.edu</a><br></br>
         
            <strong>Christine Onianwa</strong> – <a href= "mailto: chrisogo@mit.edu"> chrisogo@mit.edu</a><br></br>
           
        
      </div>
    </>
  );
}

export default Contact;
