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
const Message = require("./models/message");

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
router.get("/receivePosts", (req, res) => {
  Post.find({}).then((posts) => {
    res.send(posts);
  });
});

router.get("/receiveUserPosts", (req, res) => {
  Post.find({userId: req.query.userId}).then(
    (posts) => {
      res.send(posts);
    }
  );
});

router.get("/receivePerson", (req, res) => {
  console.log(req.query.name);
  console.log(typeof(req.query.name));

  Post.find({name: new RegExp(req.query.name, "i")}).then(
    (posts) => {
      res.send(posts);
    }
  );
});

router.get("/receiveNeed", (req, res) => {
  Post.find({iNeed: new RegExp(req.query.iNeed, "i")}).then(
    (posts) => {
      res.send(posts);
    }
  );
});

router.get("/receiveOffer", (req, res) => {
  Post.find({iOffer: req.query.iOffer}).then(
    (posts) => {
      res.send(posts);
    }
  );
});

router.post("/addNewPost", (req, res) => {
  const newPost = new Post({
    userId: req.body.userId,
    name: req.body.name,
    iNeed: req.body.iNeed,
    iOffer: req.body.iOffer,
    other: req.body.other,
    datetime: req.body.datetime
  });

  newPost.save();
});

router.post("/deletePost", (req, res) => {
  /*
  console.log("Hello there");
  console.log(req.body.postId);
  console.log(typeof(req.body.postId));
  */

  Post.deleteOne({_id: req.body.postId}).then(
    () => {
      console.log("Done");
    }
  );
});

router.post("/editPost", (req, res) => {
  Post.findOne({_id: req.body.postId}).then(
    (post) => {
      post.iNeed = req.body.iNeed;
      post.iOffer = req.body.iOffer;
      post.other = req.body.other;

      post.save();
    }
  )
});

router.get("/getProfile", (req, res) => {
  Profile.findOne({userId: req.query.userId}).then(
    (profile) =>
    {
      if (profile === null)
      {
        res.send(null);
      }
      else
      {
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
        const newProfile = new Profile({
          userId: req.body.userId,
          college: req.body.college,
          about: req.body.about
        });
      
        newProfile.save();
      }
      else
      {
        profile.userId = req.body.userId;
        profile.college = req.body.college;
        profile.about = req.body.about;

        profile.save();
      }
    }
  );
});

router.get("/chat", (req, res) => {
  let query;
  if (req.query.recipient_id === "ALL_CHAT") {
    // get any message sent by anybody to ALL_CHAT
    query = { "recipient._id": "ALL_CHAT" };
  } else {
    // get messages that are from me->you OR you->me
    query = {
      $or: [
        { "sender._id": req.user._id, "recipient._id": req.query.recipient_id },
        { "sender._id": req.query.recipient_id, "recipient._id": req.user._id },
      ],
    };
  }

  Message.find(query).then((messages) => res.send(messages));
});

router.post("/message", auth.ensureLoggedIn, (req, res) => {
  console.log("There is");
  console.log(req.body.recipient.name);

  /*
  console.log(`Received a chat message from ${req.user.name}: ${req.body.content}`);
  */

  // insert this message into the database
  const message = new Message({
    recipient: req.body.recipient,
    sender: {
      _id: req.user._id,
      name: req.user.name,
    },
    content: req.body.content,
  });
  message.save();

  if (req.body.recipient._id == "ALL_CHAT") {
    socketManager.getIo().emit("message", message);
  } else {
    socketManager.getSocketFromUserID(req.body.recipient._id).emit("message", message);
    if(req.user._id !== req.body.recipient._id) socketManager.getSocketFromUserID(req.user._id).emit("message", message);
  }
});

router.get("/activeUsers", (req, res) => {
  console.log("We're here");

  res.send({ activeUsers: socketManager.getAllConnectedUsers() });
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
