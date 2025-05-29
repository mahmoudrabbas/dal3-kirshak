import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-primary text-white text-center py-4">
      <NavLink to={"/contact"} className="nav-link">
        Contact Us
      </NavLink>
      <p>Email: contact@mra.com | Phone: +201024348948</p>
      <p className="mb-0">© 2025 Dal3 Kirshak. All rights reserved.</p>
    </div>
  );
};

export default Footer;
