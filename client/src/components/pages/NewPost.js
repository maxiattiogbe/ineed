import React, {Component, useState} from "react";
import "../../utilities.css";
import "./NewPost.css";

const NewPost = () => {
    const [currentText, setCurrentText] = useState("");
    const [currentINeed, setCurrentINeed] = useState("");
    const [currentIOffer, setCurrentIOffer] = useState("");
    const [currentOther, setCurrentOther] = useState("");

    return (
        <>
        <br></br>
        <div className="body-title-2 u-textCenter">New Post</div>
        <form onSubmit={() => alert(currentText + " " + currentINeed + " " + currentIOffer + " " + currentOther)}>
        <label className="LabelClass">
            <div className="InsideClass">Name:</div>
            <input type="text" className="InsideClass NameClass" value={currentText} onChange={event => setCurrentText(event.target.value)} />
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
        <input type="submit" className="SubmitClass" value="Submit" />
        </form>
        </>
    );
}

export default NewPost
