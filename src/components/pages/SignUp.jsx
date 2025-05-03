import './signup.css'
import Logo from '@images/logo.svg';
import Log from '@images/login.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function SignUp() {
  const [fName , setFName ] = useState("")
  const [lName , setLName ] = useState("")
  const [email , setEmail ] = useState("")
  const [password , setPassword ] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register', {
      email,
      password,
      name: `${fName} ${lName}`   
    })
    .then(res => console.log(res)).catch(error => console.log(error.message));
    
  }
  return ( 
    <>
      <div className="signin-page">
        <div className="leftsignin">
          <img src={Log} alt="loginpage image" className="logimg" />
        </div>

        <div className="rightsignin text-center">
          <form action="" onSubmit={handleSubmit}>
          <Link className="logo-link mx-auto" to="/">
            <img src={Logo} alt="logo image" className="logoimg" />
          </Link>
          <input 
            type="email" 
            id="email" 
            className="auth-input"
            placeholder="Enter your email"
            onChange={(e)=> setEmail(e.target.value)}
          />
          <input 
            type="password" 
            id="password" 
            className="auth-input"
            placeholder="Enter your password"
            onChange={(e)=> setPassword(e.target.value)}
          />
           <input 
            type="text" 
            id="fname" 
            className="auth-input"
            placeholder="Enter your first name"
            onChange={(e)=> setFName(e.target.value)}
          />
           <input 
            type="text" 
            id="sname" 
            className="auth-input"
            placeholder="Enter your last name"
            onChange={(e)=> setLName(e.target.value)}
          />
          <button className="btn-login">Create account</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
