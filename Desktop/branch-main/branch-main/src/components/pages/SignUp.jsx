import './signup.css'
import Logo from '@images/logo.svg';
import Log from '@images/login.png';
import { Link } from 'react-router-dom';

function SignUp() {
  return ( 
    <>
      <div className="signin-page">
        <div className="leftsignin">
          <img src={Log} alt="loginpage image" className="logimg" />
        </div>

        <div className="rightsignin">
          <Link className="logo-link" to="/">
            <img src={Logo} alt="logo image" className="logoimg" />
          </Link>
          <input 
            type="email" 
            id="email" 
            className="auth-input"
            placeholder="Enter your email"
          />
          <input 
            type="password" 
            id="password" 
            className="auth-input"
            placeholder="Enter your password"
          />
           <input 
            type="text" 
            id="fname" 
            className="auth-input"
            placeholder="Enter your first name"
          />
           <input 
            type="text" 
            id="sname" 
            className="auth-input"
            placeholder="Enter your last name"
          />
          <button className="btn-login">Create account</button>
        </div>
      </div>
    </>
  );
}

export default SignUp;
