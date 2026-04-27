import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
      require: true,
    },
    image: String,
    role: {
      type: String,
      enum: ["USER", "ADMIN", "STAFF", "EDITOR"],
      default: "USER",
    },
  },
  { timestamps: true },
);
export default mongoose.models.User || mongoose.model("User", UserSchema);
