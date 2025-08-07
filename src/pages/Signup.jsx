import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../features/authSlice'; 

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = () => {
    const newUser = {
      id: 2,
      name: 'New User',
      email: 'newuser@example.com',
    };

    
    dispatch(login(newUser));

    navigate('/');
  };

  return (
    <div>
      <h2>Signup</h2>
      <button onClick={handleSignup}>Create Account</button>
    </div>
  );
}

export default Signup;
