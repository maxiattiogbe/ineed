import React, { Component } from "react";


import "../../utilities.css";
import "./Profile.css";
import "./Feed";


const Profile = () => {
  return (
    <>
    <br></br>
    <div className="body-title-2 u-textCenter">Profile</div>
    <div className="boxed">
    <div classname = "bannerpage">
        < img className = "profilepic" src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt = "profile pic" ></img>
       <div className = "profilename"> Name</div> 
       </div>
       <br></br>
       <div className = "ineedtitle">ineed</div>
        <div className = "ineedposts"> </div> 
        <br></br>
        <div className = "ineedtitle">iwant</div>
        <div className = "ineedposts"> </div>
        <br></br>
        
    </div>
    </>
  );
};

export default Profile;
