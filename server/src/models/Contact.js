import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email address is required"],
      trim: true,
      lowercase: true,
      maxlength: [150, "Email cannot exceed 150 characters"],
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    service: {
      type: String,
      trim: true,
      default: "General Inquiry",
      maxlength: [100, "Service type cannot exceed 100 characters"],
    },
    budget: {
      type: String,
      trim: true,
      default: "Unspecified",
      maxlength: [50, "Budget cannot exceed 50 characters"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      maxlength: [5000, "Message cannot exceed 5000 characters"],
    },
    mode: {
      type: String,
      enum: ["dev", "cybersec"],
      default: "dev",
    },
    ip: {
      type: String,
      default: "Unknown",
    },
    userAgent: {
      type: String,
      default: "Unknown",
    },
    status: {
      type: String,
      enum: ["unread", "reviewed", "replied", "archived"],
      default: "unread",
    },
  },
  {
    timestamps: true,
  }
);

// Index for chronological query and status filtering
contactSchema.index({ createdAt: -1 });
contactSchema.index({ mode: 1, status: 1 });

export const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);
