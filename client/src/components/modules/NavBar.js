import React, { Component } from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    // modified from https://materializecss.com/navbar.html
    <nav>
    <div className="nav-wrapper black">
      {/* <img src="../../../favicon.png"/> */}
      <Link to="/" className="brand-logo left"><b>ineed</b></Link>
      <ul id="nav-mobile" className="right">
        <li><Link to="/feed">Feed</Link></li>
        <li><Link to="/new-post">New Post</Link></li>
      </ul>
    </div>
  </nav>
  );
}

export default NavBar