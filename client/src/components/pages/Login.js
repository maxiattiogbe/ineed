import React, { Component } from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./Login.css";

const GOOGLE_CLIENT_ID = "942346034916-b4mth5m9bhtvlnpuppa4djfu0olrdj0i.apps.googleusercontent.com";

const Login = ({ userId, handleLogin, handleLogout, name}) => {
  return (
    <>
        <br></br>
        {!userId && (<div className="body-title-1 u-inlineBlock u-textCenter">Login</div>)}
        <br></br>
        <br></br>
        <div className="u-textCenter">
            {userId ? (null) : (
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
            {userId && (<div className="body-text-1">Check out the <Link to={`/`} className="Login-body-link">
               Home
             </Link> page if it's your first time here or you just need a
             refresher on how to use Ineed.</div>)}
             {userId && (<div className="body-text-1">Otherwise, head straight to <Link to={`/new-post/`} className="Login-body-link">
            New Post
          </Link> to make a post and get what you need!</div>)}
             {userId && (<div className="body-text-1">Made a mistake? No worries! Go to <Link to={`/profile/`} className="Login-body-link">
            Profile
          </Link> to edit or delete posts.</div>)}
             {userId && (<div className="body-text-1">Don't forget to check <Link to={`/feed/`} className="Login-body-link">
            Feed
          </Link> for any new posts</div>)}
          {userId && (<div className="body-text-1"> and <Link to={`/messages/`} className="Login-body-link">Messages</Link> for new messages from fellow users.</div>)}
          </div>
    </>
  );
};

export default Login;
