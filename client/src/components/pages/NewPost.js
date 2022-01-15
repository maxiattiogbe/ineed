import React, {Component, useState} from "react";
import "../../utilities.css";
import "./NewPost.css";
import { post } from "../../utilities.js";

const NewPost = (props) => {
    const [currentINeed, setCurrentINeed] = useState("");
    const [currentIOffer, setCurrentIOffer] = useState("");
    const [currentOther, setCurrentOther] = useState("");
    const currentdate = new Date().toLocaleTimeString();
    const todayDate = new Date().toLocaleDateString();

let datetime = todayDate + " @ " + currentdate;
    return (
        <div className="OuterClass">
        <div className="body-title-2 u-textCenter">New Post</div>
        <div className="MiddleClass">
        <label className="LabelClass">
            <div className="InsideClass INeedTextClass">I need:</div>
            <textarea type="text" className="InsideClass INeedClass" value={currentINeed} onChange={event => setCurrentINeed(event.target.value)} />
        </label>
        <label className="LabelClass">
            <div className="InsideClass IOfferTextClass">I offer:</div>
            <textarea type="text" className="InsideClass IOfferClass" value={currentIOffer} onChange={event => setCurrentIOffer(event.target.value)} />
        </label>
        <label className="LabelClass">
            <div className="InsideClass">Other:</div>
            <textarea type="text" className="InsideClass OtherClass" value={currentOther} onChange={event => setCurrentOther(event.target.value)} />
        </label>
        <div className="SubmitClass" value="Submit" onClick={
            () => 
            {
                //alert(currentName + " " + currentINeed + " " + currentIOffer + " " + currentOther);
                post("/api/addNewPost", {name:props.name, iNeed:currentINeed, iOffer:currentIOffer, other:currentOther, datetime:datetime});
            }
        }>
            Submit!
        </div>
        </div>
        </div>
    );
}

export default NewPost
