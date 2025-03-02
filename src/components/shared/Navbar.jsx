import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [links, setLinks] = useState([
    {
      name: "Dashboard",
      path: "/",
    },
    {
      name: "Analytics",
      path: "/analytics",
    },{
      name:'Posts',
      path:'posts'
    },{
      name:'Engagement',
      path:'engagement'
    },
    {
      name: "Competitor",
      path: "/competitor",
    },
    {
      name: "Setting",
      path: "/setting",
    },
  ]);

  return (
    <nav className="navbar  navbar-expand-lg py-4 px-4">
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
          <ul className="navbar-nav mx-auto mb-2 gap-4 mb-lg-0 ms-auto text-center py-3 px-5  ">
            {links.map((link, index) => (
              <li className="nav-item fw-bold fs-5" key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active rounded-pill bg-white active shadow  px-4 py-2"
                      : "nav-link rounded-5"
                  }
                  aria-current="page"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;