import React, { Component } from "react";


import "../../utilities.css";
import "./Profile.css";
import "./Feed";


const Profile = () => {
  return (
    <>
    
    <br></br>
    <div className="body-title-2 u-textCenter">Profile</div>
    <div className = "flex-container">
    
    <div className= "flex-child">
    <div className = "aboutprofile">
    <div className="boxedprofile">
       <div className = "profilename"> About</div> 
       <br></br>
       <div className = "profileinfo">College</div>
        <div className = "profileinfotext"> </div> 
        <br></br>
        <div className = "profileinfo">About</div>
        <div className = "profileinfotext"> </div>
        <br></br>
    </div>
    </div>
    </div>

    <div className = "flex-child--featured">
    <div className="boxedprofile">
        < img className = "profilepic" src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt = "profile pic" ></img>
       <div className = "profilename"> Name</div> 
       <br></br>
       <div className = "ineedtitle">ineed</div>
        <div className = "ineedposts"> </div> 
        <br></br>
        <div className = "iwanttitle">iwant</div>
        <div className = "ineedposts"> </div>
        <br></br>
    </div>
    </div>
    </div>
    
    </>
  );
};

export default Profile;
