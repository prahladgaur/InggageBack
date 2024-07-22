const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema(
  {
    username: { type: String },
    email: { type: String, required: [true, "Email is required"] },
    password: { type: String },
    profile_pic:{type:String},
  },
  { timestamps: true }
);

const brandModel = mongoose.model("Brand", brandSchema);

export { brandModel as Brand };
