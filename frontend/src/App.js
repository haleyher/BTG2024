import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home.js';
import About from './about.js'
import Resources from './Resources.js'
import MutualAidProgram from './MutualAidProgram.js'
import FinancialMentorProgram from './FinancialMentorProgram.js'
import NavbarComponent from './NavbarComponent';


function App() {
  return (
    <>
      <NavbarComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="resources/FinancialMentorProgram" element={<FinancialMentorProgram />} />
          <Route path="resources/MutualAidProgram" element={<MutualAidProgram />} />
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
