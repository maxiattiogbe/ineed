import React, { Component, useState, useEffect, useRef } from "react";
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

    console.log(posts);

    let postsList = null;
    const hasPosts = posts.length !== 0;
    if(hasPosts) {
        postsList = posts.map((postObj) => 
            <Post
                name={postObj.name}
                ineed={postObj.iNeed}
                offer={postObj.iOffer}
                other={postObj.other}
                datetime = {postObj.datetime}
            />
        );
    }
    else
    {
        postsList = <div>No posts</div>;
    }

    console.log(postsList);
    
    const searchBar = useRef();
    const select = useRef();

    return (
        <>
        <div className="search">
        <select className = "selection" class="select" data-mdb-filter="true" ref={select}>
        <option value="1">Search by People</option>
        <option value="2">Search by need</option>
        <option value="3">Search by offer</option>
        </select>
        <div class="input-group">
        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" ref={searchBar} />
        <button type="button" class="btn btn-outline-primary" onClick={
            () =>
            {
                let searchString = searchBar.current.value;
                if (select.current.value === "1")
                {
                    get("/api/receivePerson", {name: searchString}).then(
                        (returnedPosts) =>
                        {
                            console.log(returnedPosts);
                            setPosts(returnedPosts.reverse());
                        }
                    );
                }
                else if (select.current.value === "2")
                {
                    get("/api/receiveNeed", {iNeed: searchString}).then(
                        (posts) =>
                        {
                            console.log(posts);
                            setPosts(posts.reverse());
                        }
                    );
                }
                else if (select.current.value === "3")
                {
                    get("/api/receiveOffer", {iOffer: searchString}).then(
                        (posts) =>
                        {
                            console.log(posts);
                            setPosts(posts.reverse());
                        }
                    );
                }
            }
        }>
            search
        </button>
        </div>
        </div>
        <div className="posts">
        {postsList}
        </div>
        </>
    );
}

export default Feed
