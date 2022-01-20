/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");
const Post = require("./models/post");
const Profile = require("./models/profile");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user) socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|
router.get("/receivePosts",(req,res) => {
  Post.find({}).then((posts) => {
    res.send(posts);

    /*
    console.log("We did it!");
    */
  });
});

router.post("/addNewPost", (req, res) => {
  const newPost = new Post({
    name: req.body.name,
    iNeed: req.body.iNeed,
    iOffer: req.body.iOffer,
    other: req.body.other,
    datetime: req.body.datetime
  });

  newPost.save().then((story) => res.send(story));
});

router.get("/getProfile", (req, res) => {
  Profile.findOne({userId: req.query.userId}).then(
    (profile) =>
    {
      if (profile === null)
      {
        /*
        console.log("Here it is null!");
        */

        res.send(null);
      }
      else
      {
        /*
        console.log("Here it is not null!");
        */

        res.send(profile);
      }
    }
  );
});

router.post("/updateOrStoreProfile", (req, res) => {
  Profile.findOne({userId: req.body.userId}).then(
    (profile) => {
      if (profile === null)
      {
        /*
        console.log("It's null!");
        console.log(req.body.userId);
        console.log(typeof(req.body.userId));
        */
        
        const newProfile = new Profile({
          userId: req.body.userId,
          college: req.body.college,
          about: req.body.about
        });
      
        newProfile.save();
      }
      else
      {
        /*
        console.log("It's not null!");
        */
        
        profile.userId = req.body.userId;
        profile.college = req.body.college;
        profile.about = req.body.about;

        profile.save();
      }
    }
  );
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
