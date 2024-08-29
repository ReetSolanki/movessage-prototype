import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import Chatbot from './chatbot';

function App() {
  return (
    <Router basename="/movessage-prototype/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  )
}

export default App
