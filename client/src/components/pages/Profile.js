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
      }
    );
  }, []);

  let reactPosts = posts.map(
    (post) =>
      <Post
        id={post._id}
        page="profile"
        name={post.name}
        picture={post.picture}
        ineed={post.iNeed} 
        offer={post.iOffer} 
        other={post.other}
        datetime = {post.datetime}
      />
  );

  return (
    <>
    <div className = "flex-container">
      <div className = "profileLeftContainer">
        <img className = "profilePicInProfile" src = {props.picture} alt = "profile pic"></img>
        <div className = "profileName">{props.name}</div>
        <div className = "profileAbout">{outerAbout}</div>
        <div
          className = "editButton"
          onClick = {
            () => {
              setOpen(!open);
            }
          }>
          Edit profile
        </div>
        <div className="outerCollegeContainer">
          <div className="outerCollegeText">
            College
          </div>
          {outerCollegeText}
        </div>
        <Modal isOpen={open}>
          <div className="innerAboutText">About</div>
          <textarea className="aboutTextArea" ref={innerAbout}>{outerAbout}</textarea>
          <div className="innerCollegeContainer">
            <div className="innerCollegeText">College</div>
            <input className="collegeInput" ref={innerCollege} defaultValue={outerCollegeText}></input>
          </div>
          <div className="buttonsContainer">
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
              &nbsp;Cancel
            </div>
          </div>
        </Modal>
      </div>
    
      <div className="profileRightContainer">
        <div className = "ineedtitle">
          My Posts
        </div>
        {reactPosts}
      </div>
    </div>
    </>
  );
};

export default Profile;
