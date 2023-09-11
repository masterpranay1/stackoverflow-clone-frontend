import React, { useState } from "react";
import "./Login.css";
import UAParser from "ua-parser-js";
import { useAppDispatch } from "../../app/hooks";
import { setActiveLink } from "../../features/navbar/navslice";
import { setToken } from "../../features/auth/authslice";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const parser = new UAParser();
    const parserResults = parser.getResult();

    const res = await fetch("https://api.ipify.org?format=json")
    const data = await res.json()


    const info = {
      browser: parserResults.browser.name,
      browserVersion: parserResults.browser.version,
      os: parserResults.os.name,
      osVersion: parserResults.os.version,
      device: parserResults.device.model,
      ip: data.ip
    }

    console.log(info);

    const response = await fetch("https://stackoverflow-clone-backend-vrer.onrender.com/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ email, password, ...info }),
    });

    const json = await response.json();

    if(json.token) {
      dispatch(setActiveLink("Questions"));
      dispatch(setToken(json.token));
      navigate("/questions");
    } else {
      alert(json.message);
    }

  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
