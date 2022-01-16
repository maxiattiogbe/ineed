import React, { Component, useState } from "react";
import Modal from "react-modal";

import "../../utilities.css";
import "./Profile.css";
import "./Feed";


const Profile = (props) => {
  const [open, setOpen] = useState(false);


  return (
    <>
    <div className="body-title-2 u-textCenter">Profile</div>
    <div className = "flex-container">
    <div className= "flex-child">
    <div className="aboutprofile">
    <div className="boxedprofile">
      <div className="profilename">About</div>
      <div className="profileinfo">College</div>
      <div className="profileinfotext"></div>
      <div className="profileinfo">About</div>
      <div className="profileinfotext"></div>
      <div
        className = "editButton"
        onClick = {
          () => {
            setOpen(!open);
          }
        }>
        Edit
      </div>
      <Modal isOpen={open}>
        <div>Edit My Profile</div>
        <div>College</div>
        <input id="CollegeInputNode" className="CollegeInput"></input>
        <div>About</div>
        <textarea id="AboutTextAreaNode" className="AboutTextArea"></textarea>
        <div
          className = "saveButton"
          onClick = {
            () => {
              setOpen(!open);
              console.log();
            }
          }>
          Save
        </div>
        <div
          className = "cancelButton"
          onClick = {
            () => {
              setOpen(!open);
            }
          }>
          Cancel
        </div>
      </Modal>
    </div>
    </div>
    </div>

    <div className = "flex-child--featured">
    <div className="boxedprofile">
        < img className = "profilepic" src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt = "profile pic" ></img>
       <div className = "profilename">{props.name}</div> 
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
