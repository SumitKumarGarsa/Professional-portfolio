import { Post } from "../models/Post.js";

const STATIC_POSTS = [
  {
    slug: "scaling-mongodb-aggregations-under-high-concurrency",
    number: "01",
    title: "SCALING MONGODB AGGREGATION PIPELINES UNDER HIGH CONCURRENCY",
    excerpt: "A deep dive into compound indexing strategies, pipeline stage reordering, and memory-conscious grouping operators for sub-15ms analytics queries.",
    date: "April 2026",
    readTime: "7 min read",
    category: "Database Engineering",
    tags: ["MongoDB", "Node.js", "Performance", "Indexing"],
    featured: true,
  },
  {
    slug: "building-60fps-interactive-interfaces-in-react-18",
    number: "02",
    title: "BUILDING 60FPS INTERACTION DESIGN IN REACT 18 WITH ZERO RUNTIME JANK",
    excerpt: "How to leverage React 18 concurrent transitions, CSS transform hardware acceleration, and Framer Motion layoutId.",
    date: "March 2026",
    readTime: "9 min read",
    category: "Frontend Architecture",
    tags: ["React 18", "Framer Motion", "Animations", "TypeScript"],
    featured: true,
  },
  {
    slug: "architecting-bulletproof-express-apis-with-zod-and-jwt",
    number: "03",
    title: "ARCHITECTING BULLETPROOF EXPRESS APIS: FROM ZOD CONTRACTS TO SECURITY HEADERS",
    excerpt: "A complete guide to securing Express.js applications in production: strict runtime request validation, token rotation, rate limiting, and defensive HTTP headers.",
    date: "February 2026",
    readTime: "6 min read",
    category: "Backend Security",
    tags: ["Express", "Node.js", "Zod", "Security"],
    featured: false,
  },
];

export const getPosts = async (req, res, next) => {
  try {
    const { tag, category, featured } = req.query;
    let filter = {};

    if (tag && tag !== "All") filter.tags = tag;
    if (category) filter.category = category;
    if (featured === "true") filter.featured = true;

    let posts = [];
    try {
      posts = await Post.find(filter).sort({ number: 1 }).lean();
    } catch (dbErr) {
      console.warn("[PostController] MongoDB unavailable, serving static fallback:", dbErr.message);
    }

    if (!posts || posts.length === 0) {
      posts = STATIC_POSTS;
      if (tag && tag !== "All") posts = posts.filter((p) => p.tags.includes(tag));
      if (category) posts = posts.filter((p) => p.category === category);
      if (featured === "true") posts = posts.filter((p) => p.featured);
    }

    res.status(200).json({
      success: true,
      count: posts.length,
      data: posts,
    });
  } catch (error) {
    next(error);
  }
};

export const getPostBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    let post = null;

    try {
      post = await Post.findOne({ slug }).lean();
    } catch (dbErr) {
      console.warn("[PostController] MongoDB query failed, checking static fallback:", dbErr.message);
    }

    if (!post) {
      post = STATIC_POSTS.find((p) => p.slug === slug);
    }

    if (!post) {
      return res.status(404).json({
        success: false,
        code: "POST_NOT_FOUND",
        message: `Post with slug '${slug}' was not found.`,
      });
    }

    res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    next(error);
  }
};
