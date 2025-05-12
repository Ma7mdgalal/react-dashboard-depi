import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import Logo from "@images/Logo.png";
import { links } from "@Util/index.js";

function Navbar() {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle handler for navbar
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className="navbar navbar-expand-lg py-2 bg-opacity-75">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src={Logo}
            alt="Logo"
            style={{
              width: "100px",
              cursor: "pointer",
              transition: "transform 2s ease-in-out",
              animation: "pulse 2s infinite",
            }}
          />
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isExpanded}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-lg-4 gap-md-2">
            {links.map((link, index) => {
              const isDropdownActive = link.drop
                ? location.pathname.startsWith(link.path)
                : location.pathname === link.path;

              return (
                <li className="nav-item text-center" key={index}>
                  {link.drop ? (
                    <div className="nav-item dropdown">
                      <span
                        className={`nav-link dropdown-toggle fw-bold text-dark`}
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{
                          fontSize: "clamp(1.05rem, 1.5vw, 1.05rem)",
                          borderBottom: isDropdownActive
                            ? "2px solid #4ED7F1"
                            : "none",
                          paddingBottom: "4px",
                          cursor: "pointer",
                        }}
                      >
                        {link.name}
                      </span>
                      <ul className="dropdown-menu dropdown-menu-blur">
                        {link.drop.map((item, i) => (
                          <li key={i}>
                            <NavLink
                              className="dropdown-item fw-bold"
                              to={`${link.path}/${item}`}
                            >
                              {item}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) => `nav-link fw-bold text-dark`}
                      style={({ isActive }) => ({
                        borderBottom: isActive ? "3px solid #4ED7F1" : "none",
                        paddingBottom: "4px",
                        fontSize: "clamp(1rem, 1.5vw, 1.05rem)",
                      })}
                    >
                      {link.name}
                    </NavLink>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
