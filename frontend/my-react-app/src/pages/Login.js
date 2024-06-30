import React, { useState } from 'react';
import axios from 'axios';
import './LoginSignup.css';

import user_icon from '../components/assets/person.png';
import email_icon from '../components/assets/email.png';
import password_icon from '../components/assets/password.png';

const Login = () => {
  const [action, setAction] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async () => {
    setError(null);
    setSuccess(null);
    try {
      if (action === "Login") {
        const response = await axios.post('http://localhost:8080/api/auth/login', {
          email,
          password,
        });
        setSuccess("Logged in successfully");
      } else {
        const response = await axios.post('http://localhost:8080/api/auth/signup', {
          name,
          email,
          password,
        });
        setSuccess("Signed up successfully");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Sign Up" && (
          <div className="input">
            <img src={user_icon} alt="User Icon" />
            <input
              type="text"
              placeholder="Name" required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt="Email Icon" />
          
          <input
            type="email"
            placeholder="Email id" required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="Password Icon" />
          <input
            type="password"
            placeholder="Password" required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      {action === "Login" && (
        <div className="forgot-password">
          Lost Password? <span>Click Here!</span>
        </div>
      )}
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
      <div className="submit" onClick={handleSubmit}>
        {action}
      </div>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
    </div>
  );
};

export default Login;
 
