import React, { Component } from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";

const GOOGLE_CLIENT_ID = "942346034916-b4mth5m9bhtvlnpuppa4djfu0olrdj0i.apps.googleusercontent.com";

const Login = ({ userId, handleLogin, handleLogout, name}) => {
  return (
    <>
        <br></br>
        {!userId && (<div className="body-title-1 u-inlineBlock u-textCenter">Login</div>)}
        <br></br>
        <br></br>
        <div className="u-textCenter">
            {userId ? (null
            //   <Link to={`/`} className="NavBar-link" >
            //       <GoogleLogout
            //       clientId={GOOGLE_CLIENT_ID}
            //       buttonText="Logout"
            //       onLogoutSuccess={handleLogout}
            //       onFailure={
            //         (err) => {
            //           /*
            //           console.log(err);
            //           */
            //         }
            //       }
            //       />
            // </Link>
            ) : (
                <GoogleLogin
                clientId={GOOGLE_CLIENT_ID}
                buttonText="Login with Google"
                onSuccess={handleLogin}
                onFailure={
                  (err) => {
                    /*
                    console.log(err);
                    */
                  }
                }
                />
              
            )}
            {userId && (<br></br>)}
            {userId && (<br></br>)}
            {userId && (<div className="body-text-1">Welcome {name}!</div>)}
            {userId && (<br></br>)}
            {userId && (<br></br>)}
            {userId && (<div className="body-text-1">Check out the Home page if it's your first time here or you just need a
             refresher on how to use Ineed.</div>)}
             {userId && (<div className="body-text-1">Otherwise, head straight to New Post to make a post and get what you need!</div>)}
             {userId && (<div className="body-text-1">Don't forget to check for anything new in Feed and Messages.</div>)}
          </div>
    </>
  );
};

export default Login;
