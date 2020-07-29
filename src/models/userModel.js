import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true, maxlength: 12 },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

//This makes sure that all messages associated with a user are deleted when user is deleted
UserSchema.pre("remove", function (next) {
  this.model("Message").deleteMany({ user: this._id }, next);
});

export default mongoose.model("User", UserSchema);
