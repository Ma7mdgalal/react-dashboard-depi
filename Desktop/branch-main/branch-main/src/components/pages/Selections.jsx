import Logo from '@images/Logo.svg';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import facebookIcon from '@images/face.png';
import instagramIcon from '@images/insta.png';
import twitterIcon from '@images/twit.png';
import linkedinIcon from '@images/linked.png';
import tiktokIcon from '@images/tik.png';
import girlIcon from '@images/Avatar Image.png';

import './selection.css'

function Selections() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  const handleOpenPopup = (platform) => {
    setSelectedPlatform(platform);
    setShowPopup(true);
  };

  const handleCancel = () => {
    setShowPopup(false);
    setSelectedPlatform(null);
  };

  // icons map for dynamic image rendering
  const platformIcons = {
    Facebook: facebookIcon,
    Instagram: instagramIcon,
    Twitter: twitterIcon,
    LinkedIn: linkedinIcon,
    TikTok: tiktokIcon
  };
  const [connectedAccounts, setConnectedAccounts] = useState([
    {
      id: 1,
      name: "Jessamine Mumtaz",
      platform: "Facebook",
      avatar: girlIcon
    }
  ]);
  const handleDeleteAccount = (id) => {
    setConnectedAccounts(connectedAccounts.filter(account => account.id !== id));
  };
    
  const navigate = useNavigate();

  return (
    <>
      <div className="selection">
        <div className="logospace">
        <img src={Logo} alt="Logo" className="logo" />
        </div>
        <div className="head">
        <h1>Add Social Accounts</h1>
        <p>connect the social accounts you want to manage</p>
        </div>

        <div className="platform-buttons">
          <button className="platform-btn" onClick={() => handleOpenPopup("Facebook")}>
            <img src={facebookIcon} alt="Facebook" />
          </button>
          <button className="platform-btn" onClick={() => handleOpenPopup("Instagram")}>
            <img src={instagramIcon} alt="Instagram" />
          </button>
          <button className="platform-btn" onClick={() => handleOpenPopup("Twitter")}>
            <img src={twitterIcon} alt="Twitter" />
          </button>
          <button className="platform-btn" onClick={() => handleOpenPopup("LinkedIn")}>
            <img src={linkedinIcon} alt="LinkedIn" />
          </button>
          <button className="platform-btn" onClick={() => handleOpenPopup("TikTok")}>
            <img src={tiktokIcon} alt="TikTok" />
          </button>
        </div>

        <h3>Connected Accounts</h3>
        <div className="connected-list">
     {connectedAccounts.map(account => (
    <div className="account-card" key={account.id}>
      <img src={account.avatar} alt="User" className="user-icon" />
      <div>
        <p className="account-name">{account.name}</p>
        <p className="platform-label">{account.platform}</p>
      </div>
      <button  className="delete-btn"  onClick={() => handleDeleteAccount(account.id)}>❌</button>
    </div>
  ))}
</div>
<button className="continue-btn" onClick={() => navigate('/dashboard')}>
  Continue
</button>


        {/* Popup Window */}
        {showPopup && (
          <div className="popup-overlay">
            <div className="popup">
              <img
                src={platformIcons[selectedPlatform]}
                alt={selectedPlatform}
                className="popup-icon"
              />
              <h4>Add {selectedPlatform} Account</h4>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Submit</button>
              <button className="close-btn" onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Selections;