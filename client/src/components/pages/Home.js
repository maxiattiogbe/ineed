import React, { Component } from "react";

import "../../utilities.css";
import "./Home.css";

const Home = () => {
  return (
    <>
     <br></br>
     <div className="body-title-2 u-inlineBlock u-textCenter">Get what you need by connecting on ineed.</div>
     <br></br>
     <br></br>
      <div className="body-title-1 u-textCenter">
        <img src="../../../two-friends-meeting-in-cafe.jpeg"/>
      </div> 
     <br></br>
      <div className="body-title-1 u-textCenter typewriter">
        I need lined paper and black pens.
      </div>
      <br></br>
      <div className="body-title-1 u-textCenter typewriter">
        I need a reusable water bottle.
      </div>
      <br></br>
      <div className="body-title-1 u-textCenter typewriter">
        I need a 10 ft extension cord.
      </div>
      <br></br>
    </>
  );
};

export default Home;
