import mongoose from "mongoose";
import URLSlugs from "mongoose-url-slugs";

const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
categorySchema.plugin(URLSlugs("title", { field: "slug" }));
const Categories = mongoose.model("categories", categorySchema);

export default Categories;
