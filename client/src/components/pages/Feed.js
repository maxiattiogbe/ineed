import React, { Component, useState, useEffect } from "react";
import "../../utilities.css";
import "./Feed.css";
import {get} from "../../utilities.js";
import Post from "../Post";

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        get("/api/receivePosts").then((postObjs) => {
            /*
            console.log(typeof(postObjs));
            console.log(postObjs);
            */

            let reversedPostObjs = postObjs.reverse();

            /*
            console.log(reversedPostObjs);
            */

            setPosts(reversedPostObjs);
        });
    }, []);

    /*
    console.log(posts);
    */

    /*
    const addPost = (postObj) => {
        setPosts([postObj].concat(posts));
    };
    */

    let postsList = null;
    const hasPosts = posts.length !== 0;
    if(hasPosts) {
        postsList = posts.map((postObj) => 
            <Post 
            // key={`Post_${postObj._id}`}
            name={postObj.name} 
            ineed={postObj.iNeed} 
            offer={postObj.iOffer} 
            other={postObj.other}

            />
        );
    } else {
        postsList = <div>No posts</div>;

    }
    
    /*
    console.log(postsList);
    */

    return (
        <>
     
        {postsList}

        


        </>
    );
}

export default Feed














      {/* <br></br>
        <div className="body-title-2 u-textCenter">Feed</div>
        <div className="boxed">
            < img className = "profilepic" src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt = "profile pic" ></img>
           <div className = "name"> Name</div> 
           <br></br>
            <div className = "ineed">I Need</div> 
            <div className = "postInfo">Info</div>
            <br></br>
            <div className = "ioffer">I offer</div>
            <div className = "postInfo">Info</div>
            <br></br>
            <div classname = "other">Other</div>
            <div className = "postInfo">Info</div>
            <br></br>
        </div> */}