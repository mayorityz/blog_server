import mongoose from "mongoose";
import URLSlugs from "mongoose-url-slugs";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    responseCount: { type: Number, defaultValue: 0 },
    responses: Array,
    image: { type: String, defaultValue: "" },
  },
  { timestamps: true }
);
blogSchema.plugin(URLSlugs("title", { field: "slug" }));
const Posts = mongoose.model("posts", blogSchema);

export default Posts;
