import'./Login.css';
import Logo from '@images/Logo.svg';
import Log from '@images/login.png';
function Login() {
    return ( 
        <>
        <div className="login-page">
  <div className="leftlogin">
    <a href="/" className="logo-link">
      <img src={Logo} alt="logo image" className="logoimg" />
    </a>
    <h1>Get started</h1>
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
    <button className="btn-login">Log in</button>
  </div>
  <div className="rightlogin">
    <img src={Log} alt="loginpage image" className="logimg" />
  </div>
</div>
        </>
     );
}

export default Login;