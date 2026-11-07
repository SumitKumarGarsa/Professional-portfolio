import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    number: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    readTime: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      index: true,
    },
    tags: [
      {
        type: String,
        index: true,
      },
    ],
    featured: {
      type: Boolean,
      default: false,
      index: true,
    },
    tableOfContents: [
      {
        id: String,
        title: String,
      },
    ],
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
