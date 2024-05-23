const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// schema for image urls in db
const taskSchema = new Schema(
  {
    task: {
      type: String,
      required: true,
    },
    frequency: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { collection: "Tasks" }
);

module.exports = mongoose.model("Task", taskSchema);
