import React, { Component, useState, useRef, useEffect } from "react";
import Modal from "react-modal";
import { get, post } from "../../utilities.js";
import Post from "../Post";

import "../../utilities.css";
import "./Profile.css";
import "./Feed";


const Profile = (props) => {
  const [open, setOpen] = useState(false);
  const [outerCollegeText, setOuterCollegeText] = useState("");
  const [outerAbout, setOuterAbout] = useState("");
  const [posts, setPosts] = useState([]);

  const innerCollege = useRef();
  const innerAbout = useRef();

  useEffect(() => {
    get("/api/getProfile", {userId: props.userId}).then(
      (profile) => {
        setOuterCollegeText(profile.college);
        setOuterAbout(profile.about);
      }
    );

    get("/api/receiveUserPosts", {userId: props.userId}).then(
      (posts) => {
        setPosts(posts.reverse());

        /*
        console.log(posts);
        */
      }
    );
  }, []);

  let reactPosts = posts.map(
    (post) =>
      <Post
        name={post.name} 
        ineed={post.iNeed} 
        offer={post.iOffer} 
        other={post.other}
        datetime = {post.datetime}
      />
  );

  return (
    <>
    <div className="body-title-2 u-textCenter">Profile</div>
    <div className = "flex-container">
    <div className= "flex-child">
    <div className="aboutprofile">
    <div className="boxedprofile">
      <div className="profilestart">About</div>
      <div className="profileinfo">College</div>
      <div className="profileinfotext">{outerCollegeText}</div>
      <div className="profileinfo">About</div>
      <div className="profileinfotext">{outerAbout}</div>
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
        <input className="CollegeInput" ref={innerCollege} defaultValue={outerCollegeText}></input>
        <div>About</div>
        <textarea className="AboutTextArea" ref={innerAbout}>{outerAbout}</textarea>
        <div
          className = "saveButton"
          onClick = {
            () => {
              setOpen(!open);
              post("/api/updateOrStoreProfile",
                {
                  userId: props.userId,
                  college: innerCollege.current.value,
                  about: innerAbout.current.value
                }
              );
              setOuterCollegeText(innerCollege.current.value);
              setOuterAbout(innerAbout.current.value);
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
      <img className = "profilepic" src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt = "profile pic"></img>
      <div className = "profilename">{props.name}</div> 
      <div className = "ineedtitle">ineed</div>
      <div className = "ineedposts">
        {reactPosts}
      </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default Profile;
