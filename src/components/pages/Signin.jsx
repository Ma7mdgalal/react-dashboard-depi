import './signin.css'
import Logo from '../../assets/Logo.svg';
import Log from '../../assets/login.png';

function Signin() {
  return ( 
    <>
      <div className="signin-page">
        <div className="leftsignin">
          <img src={Log} alt="loginpage image" className="logimg" />
        </div>

        <div className="rightsignin">
          <a href="/" className="logo-link">
            <img src={Logo} alt="logo image" className="logoimg" />
          </a>
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

export default Signin;
