import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

function Navbar() {
  const location = useLocation(); // Get the current URL path

  const [links] = useState([
    { name: "Dashboard", path: "/" },
    { name: "Analytics", path: "/analytics" },
    { name: "Posts", path: "/posts" },
    { name: "Engagement", path: "/engagement" },
    { name: "Competitor", path: "/competitor" },
    {
      name: "Settings",
      path: "/settings",
      drop: ["profile", "notifications"],
    },
  ]);

  return (
    <nav className="navbar navbar-expand-lg py-4 px-4">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 gap-4 mb-lg-0 ms-auto text-center align-items-center py-3 px-5">
            {links.map((link, index) => {
              const isDropdownActive = location.pathname.startsWith(link.path);

              return (
                <li className="nav-item fw-bold fs-5" key={index}>
                  {link.drop ? (
                    <NavDropdown
                      title={link.name}
                      id={`dropdown-${link.name}`}
                      className={
                        isDropdownActive
                          ? "nav-link active rounded-pill bg-white shadow px-4 py-2"
                          : "nav-link rounded-5"
                      }
                    >
                      {link.drop.map((item, i) => (
                        <NavDropdown.Item
                          key={i}
                          as={NavLink}
                          to={`${link.path}/${item}`}
                          className="dropdown-item"
                        >
                        {item}
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive
                          ? "nav-link active rounded-pill bg-white shadow px-4 py-2"
                          : "nav-link rounded-5"
                      }
                      aria-current="page"
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
