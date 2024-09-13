import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationForm from './Register';
import Login from './Login';
import Home from './Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<RegistrationForm />}/>
        <Route path="/registrationForm" element={<RegistrationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;