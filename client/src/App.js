import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./App.css";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Login from './components/Login';
import Signup from './components/Signup';

function App(){
  return (
    <Router>
      <div className='App'>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact="true" path='/' element={<Login />} >
          </Route>
          <Route path='/signup' element = {<Signup />} >
          </Route>
          <Route path="/home" element={Home} />
          <Route path="/dashboard" element={Dashboard} />
          <Route path="/profile" element={Profile} />
        </Routes>

      </div>
    </Router>
  );
}


export default App;
