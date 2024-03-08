import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Changed from useHistory

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your registration logic here
    navigate('/login'); // Changed from history.push('/login')
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
