import React, { useState, useEffect } from "react";

import "./SingleMessage.css";

/**
 * Renders a single chat message
 *
 * Proptypes
 * @param {MessageObject} message
 */
const SingleMessage = (props) => {
  return (
    <div className="SingleMessage-container">
      <span className="SingleMessage-sender">{props.message.sender.name + ":"}</span>
      <span>{props.message.content}</span>
    </div>
  );
}

export default SingleMessage;