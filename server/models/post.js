const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    name: String,
    iNeed: String,
    iOffer: String,
    other: String
});

module.exports = mongoose.model("post", PostSchema);
