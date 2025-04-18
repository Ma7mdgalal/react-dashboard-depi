import React from "react";
import cardImage from "../../assets/images/myPhoto.png";
function Competitor() {
  return (
    <>
      {/* Main Content */}
      <div className="container my-5">
        <div className="row mb-4">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Competitor 2 account"
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Competitor 1 account"
            />
          </div>
          <div className="col-md-4">
            <select className="form-select">
              <option selected>Select Item</option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
              <option value="twitter">Twitter</option>
              <option value="linkedin">LinkedIn</option>
              <option value="tiktok">TikTok</option>
            </select>
          </div>
        </div>

        <div className="row text-center">
          {/* Competitor 1 */}
          <div className="col-md-4">
            <div className="card p-3">
              <img
                src={cardImage}
                alt="Profile 1"
                className="profile-img mb-3"
              />
              <div className="card-body">
                <p className="stats">
                  <span className="highlight">41K</span> followers
                </p>
                <p className="stats">
                  <span className="highlight">220</span> likes/day
                </p>
                <p className="stats">
                  <span className="highlight">200</span> comments/day
                </p>
                <p className="stats">
                  <span className="highlight">31</span> shares/day
                </p>
                <p className="stats">
                  <span className="highlight">2</span> posts/week
                </p>
              </div>
            </div>
          </div>

          {/* Competitor 2 */}
          <div className="col-md-4">
            <div className="card p-3">
              <img
                src={cardImage}
                alt="Profile 2"
                className="profile-img mb-3"
              />
              <div className="card-body">
                <p className="stats">
                  <span className="highlight">241K</span> followers
                </p>
                <p className="stats">
                  <span className="highlight">2000</span> likes/day
                </p>
                <p className="stats">
                  <span className="highlight">800</span> comments/day
                </p>
                <p className="stats">
                  <span className="highlight">71</span> shares/day
                </p>
                <p className="stats">
                  <span className="highlight">4</span> posts/week
                </p>
              </div>
            </div>
          </div>

          {/* Competitor 3 */}
          <div className="col-md-4">
            <div className="card p-3">
              <img
                src={cardImage}
                alt="Profile 3"
                className="profile-img mb-3"
              />
              <div className="card-body">
                <p className="stats">
                  <span className="highlight">316K</span> followers
                </p>
                <p className="stats">
                  <span className="highlight">2312</span> likes/day
                </p>
                <p className="stats">
                  <span className="highlight">100</span> comments/day
                </p>
                <p className="stats">
                  <span className="highlight">21</span> shares/day
                </p>
                <p className="stats">
                  <span className="highlight">1</span> post/week
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p>
                  <strong>Rodney Salah</strong>
                </p>
                <p>Great content! Keep it up.</p>
                <p className="text-muted">2 comments · 5 shares</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p>
                  <strong>Omar Hassan</strong>
                </p>
                <p>Very informative post. Thanks for sharing!</p>
                <p className="text-muted">3 comments · 7 shares</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p>
                  <strong>Jordan Blake</strong>
                </p>
                <p>Interesting insights. Looking forward to more posts.</p>
                <p className="text-muted">4 comments · 10 shares</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Competitor;
