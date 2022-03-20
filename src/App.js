import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About'
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Home from './components/Home';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        {/* <Route exact path="/" render={() => <Navigate to="/about" />} /> */}
        {/* <Route path="/" exact element={<Home />} /> */}
        <Route path="/contact" element={<Contact />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/home" element={<Home />}/>

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
