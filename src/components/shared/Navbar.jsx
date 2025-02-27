import { Link } from "react-router-dom";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/Union.png" alt="site-brand" height={50} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto d-flex flex-wrap justify-content-end">
            <Link
              className="nav-link custom-hover rounded-pill shadow mx-1 my-1 text-center"
              style={{ padding: "0.5rem 1rem", fontSize: "1.2rem" }}
              to="/">
              Dashboard
            </Link>
            <Link
              className="nav-link custom-hover rounded-pill shadow mx-1 my-1 text-center"
              style={{ padding: "0.5rem 1rem", fontSize: "1.2rem" }}
              to="/analytics">
              Analytics
            </Link>
            <Link
              className="nav-link custom-hover rounded-pill shadow mx-1 my-1 text-center"
              style={{ padding: "0.5rem 1rem", fontSize: "1.2rem" }}
              to="/posts">
              Posts
            </Link>
            <Link
              className="nav-link custom-hover rounded-pill shadow mx-1 my-1 text-center"
              style={{ padding: "0.5rem 1rem", fontSize: "1.2rem" }}
              to="/engagement">
              Engagement
            </Link>
            <Link
              className="nav-link custom-hover rounded-pill shadow mx-1 my-1 text-center"
              style={{ padding: "0.5rem 1rem", fontSize: "1.2rem" }}
              to="/competitor">
              Competitor Analysis
            </Link>
            <div className="dropdown nav-link custom-hover rounded-pill shadow mx-1 my-1 text-center">
              <button
                className="btn"
                style={{ padding: "0.5rem 1rem", fontSize: "1.2rem" }}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Settings
                <span>
                  <FontAwesomeIcon icon={faGear} className="ms-2" />
                </span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <Link to="/settings" class="dropdown-item" type="button">
                    Notifications
                  </Link>
                </li>
                <li>
                  <Link to="/profileManage" class="dropdown-item" type="button">
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
