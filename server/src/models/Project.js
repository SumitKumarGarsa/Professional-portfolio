import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
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
    subtitle: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["Full-Stack", "Frontend", "API", "SaaS"],
      required: true,
      index: true,
    },
    year: {
      type: String,
      required: true,
    },
    client: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    timeline: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
      index: true,
    },
    overview: {
      type: String,
      required: true,
    },
    problem: {
      type: String,
      required: true,
    },
    approach: {
      type: String,
      required: true,
    },
    architecture: {
      type: String,
      required: true,
    },
    keyFeatures: [String],
    challengesAndSolutions: [
      {
        challenge: String,
        solution: String,
      },
    ],
    metrics: [
      {
        label: String,
        value: String,
      },
    ],
    deliverables: [String],
    tech: [String],
    liveUrl: String,
    githubUrl: String,
    gallery: [String],
  },
  {
    timestamps: true,
  }
);

export const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);
