// import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { links } from "@Util/index.js"; // Import links from util

function Navbar() {
  const location = useLocation(); // Get the current URL path

 
  return (
    <nav className="navbar navbar-expand-lg py-3">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 gap-4 mb-lg-0 text-center align-items-center py-3 px-5 rounded-pill shadow-lg border-3 border-bottom border-warning">
            {links.map((link, index) => {
              const isDropdownActive = link.drop
                ? location.pathname.startsWith(link.path)
                : location.pathname === link.path;

              return (
                <li className="nav-item fw-bold fs-6" key={index}>
                  {link.drop ? (
                    <NavDropdown
                      title={link.name} // 🔹 Keep title simple to allow correct positioning
                      id={`dropdown-${link.name}`}
                      className={`nav-link ${
                        isDropdownActive
                          ? "active rounded-pill bg-white shadow px-3 py-2"
                          : "rounded-5"
                      }`}
                      align="end" // Ensures the dropdown aligns properly
                    >
                      {link.drop.map((item, i) => (
                        <NavDropdown.Item
                          key={i}
                          as={NavLink}
                          to={`${link.path}/${item}`}
                          className={({ isActive }) =>
                            isActive ? "dropdown-item active" : "dropdown-item"
                          }>
                          {item}
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive
                          ? "nav-link active rounded-pill bg-white shadow px-4 py-3"
                          : "nav-link rounded-5"
                      }
                      aria-current="page">
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
