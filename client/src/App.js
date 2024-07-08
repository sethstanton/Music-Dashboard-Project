import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={Home} />
        <Route path="/dashboard" element={Dashboard} />
        <Route path="/profile" element={Profile} />
      </Routes>
    </div>
  );
}

export default App;
