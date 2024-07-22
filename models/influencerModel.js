const mongoose = require("mongoose");

const influencerSchema = mongoose.Schema(
  {
    username: { type: String },
    email: { type: String, required: [true, "Email is required"] },
    password: { type: String },
    displayName:{type:String},
    profile_pic:{type:String},
  },
  { timestamps: true }
);

const influencerModel = mongoose.model("Users", influencerSchema);
module.exports = influencerModel