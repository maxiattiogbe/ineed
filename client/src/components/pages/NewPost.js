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
        <div className="body-title-2 u-textCenter NewPost">New Post</div>
        <div className="MiddleClass">
        <label className="LabelClass">
            <div className="InsideClass INeedTextClass">I need:</div>
            <textarea  placeholder="enter a need (items,skills,help) " type="text" className="InsideClass INeedClass textbackground" value={currentINeed} onChange={event => setCurrentINeed(event.target.value)} />
        </label>
        <label className="LabelClass">
            <div className="InsideClass IOfferTextClass">I offer:</div>
            <textarea  placeholder="enter an offer (venmo,cash,favors)" type="text" className="InsideClass IOfferClass textbackground" value={currentIOffer} onChange={event => setCurrentIOffer(event.target.value)} />
        </label>
        <label className="LabelClass">
            <div className="InsideClass">Other:</div>
            <textarea placeholder="enter other essiential info (time,place," type="text" className="InsideClass OtherClass textbackground" value={currentOther} onChange={event => setCurrentOther(event.target.value)} />
        </label>
        <button type="button" className="btn btn-warning" value="Submit" onClick={
            () => 
            {   
                 window.location.href = `/feed/`;
                //alert(currentName + " " + currentINeed + " " + currentIOffer + " " + currentOther);
                post("/api/addNewPost", {name:props.name, iNeed:currentINeed, iOffer:currentIOffer, other:currentOther, datetime:datetime});
            }
        }>
            Submit!
        </button>
        </div>
        </div>
        
    );
}

export default NewPost
