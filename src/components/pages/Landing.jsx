import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';
import main from '../../assets/main.png';
import Logo from '../../assets/Logo.svg';
import supp from '../../assets/supp.png';
import DB from '../../assets/DB.png';
import AI from '../../assets/AI.png';
import users from '../../assets/users.webp';
import icons from '../../assets/humanicons.png';
function Landing() {
    const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignin = () => {
    navigate('/signin');
  };
    return (
        <>
         <div className="landing-container">
      <img src={Logo} alt="Logo" className="logo" />
     
      <div className="content">
        <div className="left">
          <h1 >
            Take control of your social media success
          </h1>
          <p>
            Track your social media performance, access detailed analytics, monitor competitors,
            and generate AI-powered content effortlessly!
          </p>
          <div className="buttons">
            <button className="btn login" onClick={handleLogin}>Log in</button>
            <button className="btn signup" onClick={handleSignin}>Sign up</button>
          </div>
        </div>
        <div className="right">
          <img src={main} alt="User" className="user-img"/>
        </div>
      </div>
    </div>
    
    <div className="headerpage">
      <div className="sq-black">
        <div className="upper">
        <img src={DB} alt="dashboard" className="DB"/>
        </div>
        <div className="lower">
        <h3>Supported networks</h3>
        <img src={supp} alt="dashboard icons" className="DBicons"/>
        </div>
      </div>
    </div>

    <div className="Aipage" >
      <div className="aiupper">
        <img src={AI} alt="aiphoto" className="AIimg"/>
      </div>
      <div className="ailower">
        <h1>Generate content with AI</h1>
        <p>Create social posts using over 1000+ social media prompts, summarize blogs, and craft high-converting content in your preferred tone of voice</p>
      </div>
    </div>

    <div className="users-help">
      <div className="who-we-help-content">
        <h1>who we help</h1>
        
        <div className="content-wrapper">
          <div className="image-container">
            <img src={users} alt="Who we help illustration" className="users-img"/>
          </div>
          
          <div className="categories-section">
            
            <ul className="categories-list">
              <li className="items">Freelancers, small businesses, agencies</li>
              <li className="items">Coaches, therapists, fitness trainers</li>
              <li className="items">Doctors, hospitals, wellness centers</li>
              <li className="items">Accountants, bookkeepers, lawyers</li>
              <li className="items">Churches, nonprofits, foundations</li>
              <li className="items">Governmental institutions, politicians</li>
              <li className="items">Authors, bloggers, podcasters</li>
              <li className="items">Social media managers, marketing specialists</li>
              <li className="items">Schools, universities, research centers</li>
              <li className="items">Hotels, restaurants, wellness resorts</li>
              <li className="items">Artists, graphic designers, photographers</li>
              <li className="items">Event planners, travel agents, car rentals</li>
            </ul>

          </div>
        </div>
      </div>
    </div>
    <div className="closing-page">
      <div className="upperclosing">
        <h1>Visible every day, even when you're away</h1>
        <h3>No more long hours spent posting content manually. Use one social media management software to centralize all your work.</h3>
      </div>
      <div className="lowerclosing">
        <img src={icons} alt='human icons' className='human-icons'/>
        <h3>Join thousands of people that love Insightly</h3>
        <div className="butns">
            <button className="btn log" onClick={handleLogin}>Log in</button>
            <button className="btn log" onClick={handleSignin}>Sign up</button>
          </div>
      </div>
    </div>
    <footer className="footer">
      <div className="footer-content">
        <img src={Logo} alt="Insightly Logo" className="footer-logo" />
        <p className="copyright">© 2025 Insightly. All rights reserved</p>
      </div>
    </footer>
        </>
     );
}

export default Landing;