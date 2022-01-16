import React, { Component } from "react";

import "../../utilities.css";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/* <div className="u-textCenter">
          <img src="../../../two-friends-meeting-in-cafe.jpeg"/>
      </div>  */}
     <div className="Home-body-title-2 u-inlineBlock u-textCenter Home-img" height="60%">
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       The social way to get
       <br></br>
       what you need.
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
      </div>

     <br></br>
     <br></br>
      <div className="body-title-1 u-textCenter typewriter">
        I need a 10 ft phone charger cable.
      </div>
      <br></br>
      <div className="body-title-1 u-textCenter typewriter">
        I need someone good at drawing.
      </div>
      <br></br>
      <div className="body-title-1 u-textCenter typewriter">
        I need help on the physics homework.
      </div>
      <br></br>
    </>
  );
};

export default Home;
