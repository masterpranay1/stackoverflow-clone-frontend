import React, { useState } from 'react';
import './Register.css';
import { useAppDispatch } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../features/auth/authslice";
import { setActiveLink } from "../../features/navbar/navslice";

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleDisplayNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRegister = async (e : any) => {
    e.preventDefault();
    const res = await fetch("https://stackoverflow-clone-backend-vrer.onrender.com/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name: displayName }),
    });

    const json = await res.json();

    if(json.token) {
      dispatch(setActiveLink("Questions"));
      dispatch(setToken(json.token));
      navigate("/questions");
    } else {
      alert(json.message);
    }

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
