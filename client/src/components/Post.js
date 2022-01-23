import {get, post} from "../utilities.js";
import React, {Component, useState, useRef, useEffect} from "react";
import { Link } from "@reach/router";
import Modal from "react-modal";
import "../utilities.css";

const Post = ({id, picture, name, ineed, offer, other, datetime, page}) => {
    const [visible, setVisible] = useState(true);
    const [open, setOpen] = useState(false);
    const [thisNeed, setThisNeed] = useState(ineed);
    const [thisOffer, setThisOffer] = useState(offer);
    const [thisOther, setThisOther] = useState(other);

    const innerNeed = useRef();
    const innerOffer = useRef();
    const innerOther = useRef();

    useEffect(
        () =>
        {
            setThisNeed(ineed);
            setThisOffer(offer);
            setThisOther(other);
        }
    );

    return (
        <>
        { visible &&
        <div className="boxed">
        <div className = "needBox">
            <div className = "ineed">I need</div>
            <div className = "postInfoNeed">{thisNeed}</div>
        </div>
        <div className = "offerBox">
            <div className = "ioffer">I offer</div>
            <div className = "postInfoOffer">{thisOffer}</div>
        </div>
        <div className = "otherBox">
            <div className = "other">Other</div>
            <div className = "postInfoOther">{thisOther}</div>
        </div>
        <div className = "name">
            <img className = "profilePicturePost" src = {picture}></img>
            <div className = "nameText">
                &nbsp;{name}&nbsp;
            </div>
            <div className = "dateTimeText">
                {datetime}
            </div>
        </div>
        {
            page !== "profile" &&
            <Link to={"/messages"} className="NavBar-link">
                <div className = "messageButton">
                    Message→
                </div>
            </Link>
        }
        <div className = "editAndDeleteWrapper">
        {
            page === "profile" &&
            <>
            <div
                className = "editPostButton"
                onClick = {
                    () => {
                        setOpen(true);
                    }
                }
                >
                Edit
            </div>
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
            <div className = "deletePostButton"
                onClick = {
                    () => {
                        setVisible(false);
                        post("/api/deletePost", {postId: id});
                    }
                }
                >
                &nbsp;Delete
            </div>
        }
        </div>
        </div>
        }
        </>
    );
  };
  
  export default Post;