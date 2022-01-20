const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    userId: String,
    college: String,
    about: String
});

module.exports = mongoose.model("profile", ProfileSchema);
