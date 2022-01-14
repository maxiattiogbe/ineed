import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./Home.css";


const GOOGLE_CLIENT_ID = "942346034916-8oq8cetdofgeupecljks6lgmgabq083l.apps.googleusercontent.com";

const Home = ({ userId, handleLogin, handleLogout }) => {
  return (
    <>
      {userId ? (
        <GoogleLogout
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={handleLogout}
          onFailure={(err) => console.log(err)}
        />
      ) : (
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={handleLogin}
          onFailure={(err) => console.log(err)}
        />
      )}
      <h1>Home</h1>
    </>
  );
};

export default Home;
