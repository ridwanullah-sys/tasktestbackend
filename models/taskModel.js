const mongoose = require("mongoose");

const schema = mongoose.Schema;

const dbSequence = new schema({
  id: {
    type: Number,
    required: true,
  },
});

const taskSchema = new schema(
  {
    task_id: {
      type: Number,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("task_test", taskSchema);
