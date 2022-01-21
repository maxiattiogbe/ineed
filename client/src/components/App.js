import React, { Component, useState, useEffect } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import NavBar from "./modules/NavBar.js"
import Feed from "./pages/Feed.js";
import NewPost from "./pages/NewPost.js";
import Messages from "./pages/Messages.js";
import Profile from "./pages/Profile.js";
import 'bootstrap/dist/css/bootstrap.min.css';

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

// to use styles, import the necessary CSS files
import "../utilities.css";
import "./App.css";

/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
      userId: undefined,
      userName: undefined,
    };
  }

  componentDidMount() {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        this.setState({ userId: user._id });
        this.setUserName({userName: user.name});
      }
    });
  }

  handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      this.setState({ userId: user._id });
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  handleLogout = () => {
    this.setState({ userId: undefined });
    post("/api/logout");
  };

  // required method: whatever is returned defines what
  // shows up on screen
  render() {
    return (
      <>
      <NavBar handleLogin={this.handleLogin} handleLogout={this.handleLogout} userId={this.state.userId}/>
      <Router>
        <Home path="/" />
        <Login path="/login" handleLogin={this.handleLogin} handleLogout={this.handleLogout} userId={this.state.userId} />
        {this.state.userId && (
          <Profile path="/profile" name={this.state.userName} userId={this.state.userId}/>
        )}
        {this.state.userId && (
          <Feed path="/feed" />
        )}
        {this.state.userId&& (
          <NewPost path="/new-post" name={this.state.userName} userId={this.state.userId}/>
        )}
        {this.state.userId && (
          <Messages path="/messages" userId={this.state.userId}/>
        )}
        <NotFound default />
      </Router>
    </>
    );
  }
}

export default App;