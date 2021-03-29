const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let post = new Schema({
    entry: {
        type: String
    },
});

module.exports = mongoose.model("post", post);

