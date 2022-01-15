import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";

const GOOGLE_CLIENT_ID = "942346034916-b4mth5m9bhtvlnpuppa4djfu0olrdj0i.apps.googleusercontent.com";

const Login = ({ userId, handleLogin, handleLogout }) => {
  return (
    <>
        <br></br>
        <div className="body-title-2 u-inlineBlock u-textCenter">Login</div>
        <br></br>
        <br></br>
        <div className="u-textCenter">
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
        </div>
      
    </>
  );
};

export default Login;
