import { Link } from "react-router-dom";
import "./navbar.css";

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
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto d-flex flex-wrap justify-content-end">
            <Link
              className="nav-link custom-hover rounded-pill shadow mx-1 my-1 text-center"
              style={{ padding: "0.5rem 1rem", fontSize: "1.2rem" }}
              to="/"
            >
              Dashboard
            </Link>
            <Link
              className="nav-link custom-hover rounded-pill shadow mx-1 my-1 text-center"
              style={{ padding: "0.5rem 1rem", fontSize: "1.2rem" }}
              to="/analytics"
            >
              Analytics
            </Link>
            <Link
              className="nav-link custom-hover rounded-pill shadow mx-1 my-1 text-center"
              style={{ padding: "0.5rem 1rem", fontSize: "1.2rem" }}
              to="/posts"
            >
              Posts
            </Link>
            <Link
              className="nav-link custom-hover rounded-pill shadow mx-1 my-1 text-center"
              style={{ padding: "0.5rem 1rem", fontSize: "1.2rem" }}
              to="/engagement"
            >
              Engagement
            </Link>
            <Link
              className="nav-link custom-hover rounded-pill shadow mx-1 my-1 text-center"
              style={{ padding: "0.5rem 1rem", fontSize: "1.2rem" }}
              to="/competitor"
            >
              Competitor Analysis
            </Link>
            <Link
              className="nav-link custom-hover rounded-pill shadow mx-1 my-1 text-center"
              style={{ padding: "0.5rem 1rem", fontSize: "1.2rem" }}
              to="/settings"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-gear"
                viewBox="0 0 16 16"
              >
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
              </svg>
              <span className="ms-1">Settings</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
