// src/pages/Signup.jsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = () => {
    const newUser = { id: Date.now(), name, email };
    dispatch(login(newUser)); // Log in after signup
    navigate('/checkout');
  };

  return (
    <div className="auth-container text-center">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button className="book-btn" onClick={handleSignup}>Sign Up</button>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;
