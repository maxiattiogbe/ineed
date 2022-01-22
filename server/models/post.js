const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    userId: String,
    name: String,
    picture: String,
    iNeed: String,
    iOffer: String,
    other: String,
    datetime: String
});

module.exports = mongoose.model("post", PostSchema);
