import React from 'react';


import './Generator.css';

function FinancialMentorProgram() {
  return (

    <>
        

        <section className="header-section text-center">
        <div className="container">
          <h1 className="main-title">Financial Mentorship Program</h1>
          <p className="subtitle">Connecting People, Ideas, and Resources for Financial Growth</p>
        </div>
      </section>
      <p className = "texttt">The average net worth of a black family in Boston, the home of some of the greatest minds and most powerful financial institutions in the nation, is just $8. This disparity is indicative of a massive class and race divide in the city, and the goal of our financial mentorship program is to close it. We allow our users to connect with students at world class business schools and undergraduate finance programs and employees at leading commercial banks and wealth/asset management firms in the form of financial literacy workshops, one-on-one consultations, and even long term mentorships-- all for free. Here, you can browse our available opportunities and find the one that best suits your needs.</p>
    
      <div className="container">
      <h2 className="bruh">Financial Opportunities</h2>
      <ol>
        <li>
          <h3 className='right' >Startup Advice</h3>
          <p className='right'>
            Black startups in Boston can connect with other founders through programs like the <strong>Black Startup Collective</strong>. This platform supports Black entrepreneurs with networking and venture capital opportunities. 
            Some examples of Boston-based Black startups include:
          </p>
          <ul className='right'>
            <li><strong>Rivet</strong>: An AI community-based platform for musicians founded by Anj Fayemi.</li>
            <li><strong>Visible Hands</strong>: Helps start-ups at the early stages by Daniel Acheampong.</li>
            <li><strong>AllHere</strong>: App that better connects parents with their students and their education by Joanna Smith-Griffin.</li>
          </ul>
        </li>
        
        <li>
          <h3 className='right'>One-on-One Consultants</h3>
          <p className='right'>
            Submit your issue for financial or business consultation, and connect with professionals from MIT Sloan to receive personalized advice. 
          </p>
          <div className="consultant-box">
            <label htmlFor="consultIssue">Submit an Issue for Consultation:</label>
            <input type="text" id="consultIssue" name="consultIssue" placeholder="Type your issue here..." />

            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </li>
        
        <li>
          <h3 className='right'>Local Events</h3>
          <p className='right'>
            Stay updated with local events like networking meetups, financial literacy workshops, and startup showcases hosted by organizations like <strong>Visible Hands</strong>, a venture capital firm supporting underrepresented founders.
          </p>
          <ul className='right'>
            <li>Boston Black Entrepreneurs Meetup - October 10, 2024</li>
            <li>Financial Literacy Workshop at Roxbury Community College - November 3, 2024</li>
            <li>Startup Showcase by BlackTech Boston - December 5, 2024</li>
          </ul>
        </li>
      </ol>
    </div>
    
    </>
  );
}

export default FinancialMentorProgram;