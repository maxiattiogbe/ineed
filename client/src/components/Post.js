import {get, post} from "../utilities.js";
import React, {Component, useState, useRef} from "react";
import { Link } from "@reach/router";
import Modal from "react-modal";
import "../utilities.css";

const Post = ({id, name, ineed, offer, other, datetime, page}) => {
    const [visible, setVisible] = useState(true);
    const [open, setOpen] = useState(false);
    const [thisNeed, setThisNeed] = useState(ineed);
    const [thisOffer, setThisOffer] = useState(offer);
    const [thisOther, setThisOther] = useState(other);

    const innerNeed = useRef();
    const innerOffer = useRef();
    const innerOther = useRef();

    console.log(id);

    return (
        <>
        { visible &&
        <div className="boxed">
        <img className = "profilepic" src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt = "profile pic"></img>
        <div className = "name">{name}</div> 
        <br></br>
        <div className = "ineed">I need</div>
        <div className = "postInfoNeed">{thisNeed}</div>
        <br></br>
        <div className = "ioffer">I offer</div>
        <div className = "postInfoOffer">{thisOffer}</div>
        <br></br>
        <div className = "other" >Other</div>
        <div className = "postInfoOther">{thisOther}</div>
        <br></br>
        <div class = "time">{datetime}</div>
        <br></br>
        <Link to={"/messages"} className="NavBar-link" >
            <button class="btn btn-outline-success">Message</button>
        </Link>
        <br></br>
        {
            page === "profile" &&
            <>
            <button
                class="btn btn-outline-success"
                onClick = {
                    () => {
                        setOpen(true);
                    }
                }
                >
                Edit
            </button>
            <Modal isOpen={open}>
                <div>Edit post</div>
                <div>I need</div>
                <textarea ref={innerNeed}>{thisNeed}</textarea>
                <div>I offer</div>
                <textarea ref={innerOffer}>{thisOffer}</textarea>
                <div>Other</div>
                <textarea ref={innerOther}>{thisOther}</textarea>
                <br></br>
                <button
                    class = "btn btn-outline-success"
                    onClick = {
                        () => {
                            setThisNeed(innerNeed.current.value);
                            setThisOffer(innerOffer.current.value);
                            setThisOther(innerOther.current.value);

                            post("/api/editPost",
                                {
                                    postId: id,
                                    iNeed: innerNeed.current.value,
                                    iOffer: innerOffer.current.value,
                                    other: innerOther.current.value
                                }
                            );

                            setOpen(false);
                        }
                    }
                    >
                    Save
                </button>
                <button
                    class = "btn btn-outline-success"
                    onClick = {
                        () => {
                            setOpen(false);
                        }
                    }
                    >
                    Cancel
                </button>
            </Modal>
            </>
        }
        {
            page === "profile" &&
            <button
                class = "btn btn-outline-success"
                onClick = {
                    () => {
                        console.log("Here");
                        console.log(id);
                       
                        setVisible(false);
                        post("/api/deletePost", {postId: id});
                    }
                }
                >
                Delete
            </button>
        }
        </div>
        }
        </>
    );
  };
  
  export default Post;