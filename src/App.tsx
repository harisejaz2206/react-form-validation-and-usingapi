import React from 'react';
import './index.css'
import Navbar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { LoginComponent } from './components/Login';
import { SignUpComponent } from './components/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signup" element={<SignUpComponent />} />
      </Routes>
    </div>
  );
}

export default App;
