import mongoose from "mongoose";
import moment from "moment";
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String, required: true, maxlength: 100 },
  markdown: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  timestamp: { type: Date, default: Date.now },
  formatted_date: {
    type: String,
    default: moment(new Date()).format("MMMM Do YYYY, h:mm a"),
  },
});

export default mongoose.model("Post", PostSchema);
