import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home.js';
import About from './about.js'
import Resources from './Resources.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Make each route independent */}
        <Route path="/" element={<Home />} /> {/* Home page route */}
        <Route path="/about" element={<About />} /> {/* About page route */}
        <Route path="/resources" element={<Resources />} /> {/* Resources page route */}

      </Routes>
    </BrowserRouter>

  );
}

export default App;
