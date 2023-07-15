import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/header';

import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Credentials from './components/Credentials/Credentials';
import Awards from './components/Awards/Awards';
import Profile from './components/Profile/Profile';

// import './App.css';



const App = () => {
  return (
    <div className="container">
    <Router>
    <Routes>
      <Route path="/" element={<Header />} />
 
      <Route path="/experience" element={<Experience />} />
      <Route path="/education" element={<Education />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/credentials" element={<Credentials />} />
      <Route path="/awards" element={<Awards />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>
  </div>
  );
};

export default App
