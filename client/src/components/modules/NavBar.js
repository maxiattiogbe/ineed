import React, { Component } from "react";
import { Link } from "@reach/router";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar-container">
      <img className="NavBar-logo-image" src="../../../favicon.png"/>
      <div className="NavBar-title-part1 u-inlineBlock">i</div>
      <div className="NavBar-title-part2 u-inlineBlock">need</div>
      <div className="NavBar-linkContainer u-inlineBlock">
        <Link to="/" className="NavBar-link">
          Home
        </Link>
        <Link to="/login" className="NavBar-link">
          Login
        </Link>
        <Link to="/feed" className="NavBar-link">
          Feed
        </Link>
        <Link to="/new-post"className="NavBar-link">
          New Post
        </Link>
      </div>
    </nav>
  );
}

export default NavBar