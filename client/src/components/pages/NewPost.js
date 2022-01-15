import React, {Component, useState} from "react";
import "../../utilities.css";
import "./NewPost.css";
import { post } from "../../utilities.js";

const NewPost = () => {
    const [currentName, setCurrentName] = useState("");
    const [currentINeed, setCurrentINeed] = useState("");
    const [currentIOffer, setCurrentIOffer] = useState("");
    const [currentOther, setCurrentOther] = useState("");

    return (
        <>
        <br></br>
        <div className="body-title-2 u-textCenter">New Post</div>
        <div>
        <label className="LabelClass">
            <div className="InsideClass">Name:</div>
            <input type="text" className="InsideClass NameClass" value={currentName} onChange={event => setCurrentName(event.target.value)} />
        </label>
        <label className="LabelClass">
            <div className="InsideClass INeedTextClass">I need:</div>
            <input type="text" className="InsideClass INeedClass" value={currentINeed} onChange={event => setCurrentINeed(event.target.value)} />
        </label>
        <label className="LabelClass">
            <div className="InsideClass IWantTextClass">I offer:</div>
            <input type="text" className="InsideClass IWantClass" value={currentIOffer} onChange={event => setCurrentIOffer(event.target.value)} />
        </label>
        <label className="LabelClass">
            <div className="InsideClass">Other:</div>
            <input type="text" className="InsideClass OtherClass" value={currentOther} onChange={event => setCurrentOther(event.target.value)} />
        </label>
        <div className="SubmitClass" value="Submit" onClick={
            () => 
            {
                //alert(currentName + " " + currentINeed + " " + currentIOffer + " " + currentOther);
                post("/api/addNewPost", {name:currentName, iNeed:currentINeed, iOffer:currentIOffer, other:currentOther});
            }
        }>
            Submit!
        </div>
        </div>
        </>
    );
}

export default NewPost
