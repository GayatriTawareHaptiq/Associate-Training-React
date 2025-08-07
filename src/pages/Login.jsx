import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { login } from '../features/authSlice';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    const mockUser = {
      id: 1,
      name: 'Demo User',
      email: 'demo@example.com',
    };

    dispatch(login(mockUser));

    const redirectPath = location.state?.from?.pathname || '/';
    navigate(redirectPath);
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login as Demo User</button>
    </div>
  );
}

export default Login;
