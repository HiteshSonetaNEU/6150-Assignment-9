import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import AboutUsPage from './components/AboutUsPage';
import JobsPage from './components/JobsPage';
import ContactPage from './components/ContactPage';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LoginPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/about" element={<AboutUsPage/>} />
        <Route path="/jobs" element={<JobsPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
