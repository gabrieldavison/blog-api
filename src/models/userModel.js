import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: { type: String, required: true, unique: true, maxlength: 12 },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

UserSchema.statics.findByLogin = async function (login) {
  let user = await this.findOne({
    username: login,
  });

  if (!user) {
    user = await this.findOne({ email: login });
  }

  return user;
};

//This makes sure that all messages associated with a user are deleted when user is deleted
UserSchema.pre("remove", function (next) {
  this.model("Message").deleteMany({ user: this._id }, next);
});

export default mongoose.model("User", UserSchema);
