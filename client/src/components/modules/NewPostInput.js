import React, { useState } from "react";

import "./NewPostInput.css";
import { post } from "../../utilities";

/**
 * New Post is a parent component for all input components
 *
 * Proptypes
 * @param {string} defaultText is the placeholder text
 * @param {string} storyId optional prop, used for comments
 * @param {({storyId, value}) => void} onSubmit: (function) triggered when this post is submitted, takes {storyId, value} as parameters
 */
const NewPostInput = (props) => {
  const [value, setValue] = useState("");

  // called whenever the user types in the new post input box
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // called when the user hits "Submit" for a new post
  const handleSubmit = (event) => {
    props.onSubmit(value);
    
    /*
    event.preventDefault();
    */
    
    /*
    props.onSubmit && props.onSubmit(value);
    setValue("");
    */
  };

  return (
    <>
      <textarea
        className = "NewMessageTextArea"
        placeholder = {props.defaultText}
        value = {value}
        onChange = {handleChange}
        >
      </textarea>
      <div
        className = "NewMessageSubmit"
        onClick = {handleSubmit}
        >
        Submit
      </div>
    </>
  );
};

/**
 * New Comment is a New Post component for comments
 *
 * Proptypes
 * @param {string} defaultText is the placeholder text
 * @param {string} storyId to add comment to
 */
const NewComment = (props) => {
  const addComment = (value) => {
    const body = { parent: props.storyId, content: value };
    post("/api/comment", body).then((comment) => {
      // display this comment on the screen
      props.addNewComment(comment);
    });
  };

  return <NewPostInput defaultText="New Comment" onSubmit={addComment} />;
};

/**
 * New Message is a New Message component for messages
 *
 * Proptypes
 * @param {UserObject} recipient is the intended recipient
 */
const NewMessage = (props) => {
  const sendMessage = (value) => {
    /*
    console.log("Hello everyone.");
    console.log(props.recipient);
    */

    const body = { recipient: props.recipient, content: value };

    /*
    console.log(body);
    */

    post("/api/message", body);
  };

  return <NewPostInput defaultText="New Message" onSubmit={sendMessage} />;
}

export { NewComment, NewMessage };
