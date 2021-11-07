import React from "react";

//stateless functional component
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="http://localhost:3000/#" className="navbar-brand">
        NavBar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
