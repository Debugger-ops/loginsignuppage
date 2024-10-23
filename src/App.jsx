import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './components/LoginSignup/LoginSignup'; // Your login/signup component
import ResetPassword from './components/ResetPassword.jsx';
import SignUp from './components/SignUp.jsx'; // Create this component
import Login from './components/Login.jsx'; // Create this component

const App = () => {
    return (
        <Router>
            <Routes>
            <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<LoginSignup />} /> {/* Ensure this is correct */}
                <Route path="/reset-password" element={<ResetPassword/>} />
            </Routes>
        </Router>
    );
};

export default App;
