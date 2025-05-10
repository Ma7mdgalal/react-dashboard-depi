// // import { useState } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import { NavDropdown } from "react-bootstrap";
// import { links } from "@Util/index.js"; // Import links from util
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

// function Navbar() {
//   const location = useLocation(); // Get the current URL path

//   return (
//     <nav className="navbar navbar-expand-lg py-3">
//       <div className="container-fluid">
//         <button
//           className="navbar-toggler  "
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span>
//             <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />
//           </span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav mx-auto mb-2 gap-4 mb-lg-0 text-center align-items-center py-3 px-5 rounded-pill border-2 border-bottom border-light bg-dark text-white">
//             {links.map((link, index) => {
//               const isDropdownActive = link.drop
//                 ? location.pathname.startsWith(link.path)
//                 : location.pathname === link.path;

//               return (
//                 <li className="nav-item fw-bold fs-6" key={index}>
//                   {link.drop ? (
//                     <NavDropdown
//                       title={link.name}
//                       id={`dropdown-${link.name}`}
//                       className={`nav-link ${
//                         isDropdownActive
//                           ? "rounded-pill bg-dark text-primary px-3 py-2"
//                           : "rounded-5 text-white"
//                       }`}
//                       align="end"
//                     >
//                       {link.drop.map((item, i) => (
//                         <NavDropdown.Item
//                           key={i}
//                           as={NavLink}
//                           to={`${link.path}/${item}`}
//                           className={({ isActive }) =>
//                             isActive
//                               ? "dropdown-item active bg-light text-dark"
//                               : "dropdown-item text-dark"
//                           }
//                         >
//                           {item}
//                         </NavDropdown.Item>
//                       ))}
//                     </NavDropdown>
//                   ) : (
//                     <NavLink
//                       to={link.path}
//                       className={({ isActive }) =>
//                         isActive
//                           ? "nav-link active rounded-pill bg-white px-4 py-3 text-dark"
//                           : "nav-link rounded-5 text-white"
//                       }
//                       aria-current="page"
//                     >
//                       {link.name}
//                     </NavLink>
//                   )}
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
