import React from "react";
import { NavLink } from "react-router-dom";

const SingedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">New project</NavLink>
      </li>
      <li>
        <NavLink to="/todo">Todo</NavLink>{" "}
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>{" "}
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          NN
        </NavLink>{" "}
      </li>
    </ul>
  );
};
export default SingedInLinks;
