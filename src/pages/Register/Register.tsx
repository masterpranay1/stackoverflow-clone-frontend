import React, { useState } from 'react';
import './Register.css';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const handleDisplayNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    // Add registration logic here (e.g., API call)
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form>
        {/* Add the display name input */}
        <div>
          <label>Display Name:</label>
          <input
            type="text"
            value={displayName}
            onChange={handleDisplayNameChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
};

export default Register;
