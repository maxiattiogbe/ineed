import React, { Component } from "react";
import { useEffect } from "react";

import "../../utilities.css";
import "./Home.css";


const Home = () => {
  // Modified from https://codepen.io/gschier/pen/jkivt
  let TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 500;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function() {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    let that = this;
    let delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function() {
      that.tick();
    }, delta);
  };

  useEffect(() => {  
    let elements = document.getElementsByClassName('txt-rotate');
    for (let i=0; i<elements.length; i++) {
      let toRotate = elements[i].getAttribute('data-rotate');
      let period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    let css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #292a2a }";
    document.body.appendChild(css);
     }, [])
    
  return (
    <>
      <div className="Home-img">
        <div className="Home-body-title-4 u-inlineBlock u-textCenter">
          <br></br>
          <br></br>
          <div className="Home-overlay">
            The social way to get what you need.
          </div>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>

     <section className="Home-section"> 
        <h1 className="u-textCenter">Need something? We got you.</h1>
        <br></br>
        <h1 className="u-textCenter">Login to get what you need in three easy steps.</h1>
        <br></br>
     </section>

     <section className="Home-section5 u-textCenter"> 
      <section className="Home-section4 u-inlineBlock">
          <h1 className="Home-body-title-4">1. Post</h1>
          <hr></hr>
          <img src="../../../send.png" className="Home-img2"/>
      </section>
      <section className="Home-section2 u-inlineBlock">
          <h1 className="Home-body-title-4">2. Message</h1>
          <hr></hr>
          <img src="../../../chat.png" className="Home-img2"/>
      </section>
      <section className="Home-section3 u-inlineBlock">
          <h1 className="Home-body-title-4">3. Meet</h1>
          <hr></hr>
          <img src="../../../deal.png" className="Home-img2"/>
      </section>
     </section>

      <section className="Home-section">
        <h1 className="Home-body-title-1 u-textCenter">Post</h1>
        <hr></hr>
        <br></br>
        <h1>Go to New Post and simply post whatever you need ... </h1>
        <br></br>
        <h1 className="Home-body-title-2">I need
          <span
            class="txt-rotate"
            data-period="100"
            data-rotate='[ " a 10 ft phone charger cable. ", " someone good at drawing. ", " help on physics homework. "]'></span>
        </h1>
        <br></br>
        <h1 className="u-flex-alignCenter">... along with anything you'll offer in return ...</h1>
          <br></br>
          <h1 className="Home-body-title-3">I offer
            <span
              class="txt-rotate"
              data-period="100"
              data-rotate='[ " $10 on Venmo. ", " two cups of boba :)  ", " free hugs <3  "]'></span>
        </h1>
        <br></br>
        <h1 className="u-flex-alignCenter">... and possibly additional details like when and where people can meet you.</h1>
      </section>

      <section className="Home-section">
        <h1 className="Home-body-title-1 u-textCenter">Messsage</h1>
        <hr></hr>
        <br></br>
        <h1>Want to respond to someone's offer in your feed? Click Message on their post or use to the navigation bar to go
           to Messages and direct messaging them to work out the details.</h1>
      </section>

      <section className="Home-section">
        <h1 className="Home-body-title-1 u-textCenter">Meet</h1>
        <hr></hr>
        <br></br>
        <h1>Meet up to get what you need! If you're lucky, you might also get a new friend as a bonus.</h1>
      </section>
      <div className="u-textCenter">
        <a href="https://www.flaticon.com/free-icons/direct" title="direct icons">Direct icons created by Vitaly Gorbachev - Flaticon</a>
      </div>
    </>
  );
};

export default Home;
