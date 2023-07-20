const mongoose = require("mongoose");
const { db } = require("./taskModel");

const schema = mongoose.Schema;

const dbSequence = new schema({
  presentId: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("dbsequennce", dbSequence);
