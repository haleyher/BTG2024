import "./App.css";

import React from 'react';
import './Generator.css'; // Custom CSS file for additional styling

function generator() {
    var email = "timthebeaver@gmail.com";

    return (
      <>
        <div className="container my-5">
          <div className="text-center mb-5">
            <h1 className="display-4">Welcome to IdeaBoard</h1>
            <p className="lead">Connecting People, Ideas, and Resources</p>
          </div>

          <div className="card mb-4 shadow-lg">
            <div className="card-body">
              <h2 className="card-title">Usage</h2>
              <p className="textSection">
                Our website serves as more than just a resource hub. In order to break the thousands of African Americans living under the poverty line in Boston out of the web of financial instability and the generational cycles it generates, we need to create and strengthen bonds in and out of the community.
              </p>
              <p className="textSection">
                Our financial mentor program connects users with financial leaders from top business schools, banks, and wealth management firms in the area. Whether you're looking for high-quality guidance to get your business off the ground or a helping hand from a member of your community, our programs aim to sow the seeds for long-term financial success.
              </p>
            </div>
          </div>

          <div className="card shadow-lg">
            <div className="card-body">
              <h2 className="card-title">Purpose</h2>
              <p className="textSection">
                We hope to increase Computer Science engagement, specifically in middle school kids.
              </p>
              <p className="textSection">
                The first hurdle most people have to combat is ideation. As STEM Mentors, we encourage young students to jump right into a project instead of getting stuck on creating the "perfect idea."
              </p>
            </div>
          </div>
        </div>
      </>
    );
}

export default generator;
