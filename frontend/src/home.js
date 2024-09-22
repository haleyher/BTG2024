import "./App.css";
import "./Generator.css";

document.documentElement.style.textAlign = 'center';
document.body.style.backgroundColor = '#e3e5e6';

function generator() {
 


    return (
      <>
       
       
        <h1 className="titlete">Project Uplift</h1>
        <div className="align-items">
        <iframe className="frame"   src="https://lookerstudio.google.com/embed/reporting/c0aafaf9-6703-409c-843e-b813eb9dfcbc/page/3GiCE" frameborder="0" allowfullscreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>
        </div>
        <h3>Counts of households making $500K or more by race</h3>
        <p className="texttt">Staggering numbers like these are why we want to make a difference with <b>Project Uplift</b>. Specifically, with this project, we hope to combat the wealth disparity between white and black populations found here in Boston.
        As you explore our site, you will find a collection of tools and resources to provide financial support and stability. </p>
        </>
    );
}

  export default generator;
