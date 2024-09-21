const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commnetSchema = new Schema(
  {
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    commnet: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const nationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true
    },
    commnets:[commnetSchema]
  },
  {
    timestamps: true,
  }
);

var Nations = mongoose.model("nations", nationSchema);
module.exports = Nations;
