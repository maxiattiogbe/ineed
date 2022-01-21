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
            datetime = {postObj.datetime}

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
        <div className="search">
    
        <select className = "selection" class="select" data-mdb-filter="true">
  <option value="1">Search by People</option>
  <option value="2">Search by need</option>
  <option value="2">Search by offer</option>

</select>
  
<div class="input-group">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" class="btn btn-outline-primary">search</button>
</div>
  </div>

     <div className="posts">
        {postsList}
        </div>
        

        </>
    );
}


export default Feed




  











    