import "./Login.css";
import Logo from "@images/Logo.svg";
import Log from "@images/login.png";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    // Make API request for login
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((res) => {
        if (res.data.message === "success") {
          setRedirect(true); // Set redirect to true on successful login
        }
      })
      .catch((error) => {
        setErrorMessage(error.response?.data?.message || "Invalid login credentials");
      });
  };

  if (redirect) {
    return <Navigate to="/dashboard" />; // Redirect to dashboard after successful login
  }

  return (
    <div className="login-page">
      <div className="leftlogin">
        <a href="/" className="logo-link">
          <img src={Logo} alt="logo" className="logoimg" />
        </a>
        <h1>Get started</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            className="auth-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
          />
          <input
            type="password"
            id="password"
            className="auth-input"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Password"
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="btn-login">
            Log in
          </button>
        </form>
      </div>
      <div className="rightlogin">
        <img src={Log} alt="login illustration" className="logimg" />
      </div>
    </div>
  );
}

export default Login;
