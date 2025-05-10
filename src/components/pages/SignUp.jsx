import "./signup.css";
import Logo from "@images/logo.png";
import Log from "@images/login.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function SignUp() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    if (!fName || !lName || !email || !password) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    axios
      .post("http://localhost:3001/register", {
        email,
        password,
        name: `${fName} ${lName}`,
      })
      .then((res) => {
        console.log(res);
        setRedirect(true); // Redirect on successful registration
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage(
          error.response?.data?.message ||
            "Registration failed. Please try again."
        );
      });
  };

  if (redirect) {
    return <Navigate to="/dashboard" />; // Redirect to dashboard after successful registration
  }

  return (
    <>
      <div className="signin-page">
        <div className="leftsignin">
          <img src={Log} alt="loginpage image" className="logimg" />
        </div>

        <div className="rightsignin">
          <form onSubmit={handleSubmit}>
            <Link className="logo-link" to="/">
              <img src={Logo} alt="logo image" className="logoimg" />
            </Link>
            <h1>Create account</h1>
            <input
              type="text"
              id="fname"
              className="auth-input"
              placeholder="Enter your first name"
              value={fName}
              onChange={(e) => setFName(e.target.value)}
              aria-label="First name"
            />
            <input
              type="text"
              id="sname"
              className="auth-input"
              placeholder="Enter your last name"
              value={lName}
              onChange={(e) => setLName(e.target.value)}
              aria-label="Last name"
            />
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
            <p className="login-option fw-medium">
              Already have an account?&nbsp;
              <span onClick={() => navigate("/login")} className="login-link">
                Log in
              </span>
            </p>
            <button type="submit" className="btn-login">
              Create account
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
