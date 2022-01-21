import React, { Component } from "react";
import "../../utilities.css";

const Messages = () => {
  return (
    <>
        <br></br>
        <div className="body-title-2 u-inlineBlock u-textCenter">Messages</div>
        <div class="form-outline">
            <input type="search" id="form1" class="form-control" placeholder="Search People" aria-label="Search" />
        </div>
        <br></br>
    </>
  );
};

export default Messages;
