import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/Signup';
import DocumentsList from './components/DocumentsList';
import DocumentEditor from './components/DocumentEditor';
import Navbar from './components/Navbar';
import './css/App.css';

const App = () => {
  const [token, setToken] = useState(null);

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <Router>
      <div>
        <Navbar token={token} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login setUser={setToken} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/documents" element={<DocumentsList token={token} />} />
          <Route path="/documents/new" element={<div>Create New Document</div>} />
          <Route path="/documents/:id" element={<DocumentEditor token={token} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;