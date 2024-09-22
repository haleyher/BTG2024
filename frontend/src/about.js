import "./App.css";

import React from 'react';
import { FaLightbulb, FaProjectDiagram, FaUsers } from 'react-icons/fa';
import Footer from './Footer'; // Import the Footer component
import './Generator.css';
import { AiOutlineExclamationCircle } from 'react-icons/ai';


function generator() {
    return (
      <div className="page-wrapper">
        {/* Header Section */}
        <section className="header-section text-center">
  <div className="container">
    <h1 className="main-title">Welcome to IdeaBoard</h1>
    <p className="subtitle">Connecting People, Ideas, and Resources for Financial Growth</p>
    <div className="svg-container">
      
    </div>
  </div>
</section>

        {/* Content Section */}
        <div className="container content-section">
          {/* Usage Section */}
          <div className="card usage-card mb-5">
            <div className="card-body">
              <h2 className="card-title"><FaLightbulb className="icon"/> Usage</h2>
              <p className="textSection">
                Our platform serves as a resource hub to break the cycle of financial instability faced by many. By connecting users with financial leaders and community programs, we aim to foster long-term growth and prosperity.
              </p>
            </div>
          </div>


          {/* Purpose Section */}
          <div className="card purpose-card mb-5">
            <div className="card-body">
              <h2 className="card-title"><FaProjectDiagram className="icon"/> Purpose</h2>
              <p className="textSection">
                We aim to increase engagement in Computer Science, particularly among middle school students. By encouraging students to jump right into projects, we help them overcome the fear of not having the "perfect idea."
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="card contact-card mb-5">
            <div className="card-body">
              <h2 className="card-title"><FaUsers className="icon"/> Community</h2>
              <p className="textSection">
                Join our community programs and connect with mentors to enhance your financial literacy.
              </p>
            </div>
          </div>
        </div>

        
      </div>
    );
}

export default generator;
