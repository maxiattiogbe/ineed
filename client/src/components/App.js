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
 * Define the "App" component as a function.
 */
const App = () => {
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userFirstName, setUserFirstName] = useState(null);
  const [userPicture, setUserPicture] = useState(null);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
        setUserName(user.name);
        setUserFirstName(user.name.split(' ')[0]);
        setUserPicture(user.picture);
      }
    });
  }, []);

  // TODO (extra!): Catch the "forceDisconnect" socket event.
  // In the callback function, set the state 'socketDisconnected' to true.

  const handleLogin = (res) => {
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      setUserName(user.name);
      setUserFirstName(user.name.split(' ')[0]);
      setUserPicture(user.picture);
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    /*
    console.log("Logged out successfully!");
    */
    
    setUserId(null);
    setUserName(null);
    setUserFirstName(null);
    setUserPicture(null);
    post("/api/logout");
  };

  // required method: whatever is returned defines what
  // shows up on screen
  return (
    // <> is like a <div>, but won't show
    // up in the DOM tree
    <>
      <NavBar handleLogin={handleLogin} handleLogout={handleLogout} userId={userId}/>
      <Router>
        <Home path="/" userId={userId}/>
        <Login path="/login" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} name={userFirstName} />
        {userId && (
          <Profile path="/profile" name={userName} userId={userId} picture={userPicture}/>
        )}
        {userId && (
          <Feed path="/feed" />
        )}
        {userId&& (
          <NewPost path="/new-post" name={userName} userId={userId}/>
        )}
        {userId && (
          <Messages path="/messages" userId={userId}/>
        )}
        <NotFound default />
      </Router>
    </>
  );
};

export default App;