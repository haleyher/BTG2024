import "./App.css";


function generator() {


    return (
      <>
        <h1>About IdeaBoard</h1>
        <div className="card"></div>
        <h3>Counts of households making $500K or more by race</h3>
        <iframe width="800" height="600" src="https://lookerstudio.google.com/embed/reporting/c0aafaf9-6703-409c-843e-b813eb9dfcbc/page/3GiCE" frameborder="0" allowfullscreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>
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
