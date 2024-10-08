import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home.js';
import About from './about.js'
import Resources from './Resources.js'
import MutualAidProgram from './MutualAidProgram.js'
import FinancialMentorshipProgram from './FinancialMentorshipProgram.js'
import NavbarComponent from './NavbarComponent';
import Contact from './contact';
import Footer from './Footer.js';


function App() {
  return (
    <>
      <NavbarComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="resources/FinancialMentorshipProgram" element={<FinancialMentorshipProgram />} />
          <Route path="resources/MutualAidProgram" element={<MutualAidProgram />} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>

  );
}

export default App;
