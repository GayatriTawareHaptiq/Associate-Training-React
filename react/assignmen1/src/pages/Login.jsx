

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    const mockUser = { id: 1, name: 'Gayatri', email };
    dispatch(login(mockUser));
    navigate('/checkout');
  };

  return (
    <div className="auth-container text-center">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button className="book-btn" onClick={handleLogin}>Login</button>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}

export default Login;
