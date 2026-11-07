import express from "express";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./src/config/db.js";
import { globalApiLimiter } from "./src/middleware/rateLimiter.js";
import contactRoutes from "./src/routes/contactRoutes.js";
import projectRoutes from "./src/routes/projectRoutes.js";
import postRoutes from "./src/routes/postRoutes.js";
import healthRoutes from "./src/routes/healthRoutes.js";

// 1. Initialize environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

// 2. Connect to MongoDB
connectDB();

// 3. Security Headers via Helmet
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:", "https://images.unsplash.com"],
        connectSrc: ["'self'", CLIENT_URL],
      },
    },
    crossOriginEmbedderPolicy: false,
  })
);

// 4. CORS Whitelist Configuration
const allowedOrigins = [
  CLIENT_URL,
  "http://localhost:5173",
  "http://localhost:3000",
  "https://sumitkumargarsa.dev",
  "https://sumitkumargarsa.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, Postman) in dev
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// 5. Body Parsing with Strict Size Limit (Prevent payload DoS)
app.use(express.json({ limit: "15kb" }));
app.use(express.urlencoded({ extended: true, limit: "15kb" }));

// 6. Global API Rate Limiter
app.use("/api", globalApiLimiter);

// 7. Route Handlers
app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/health", healthRoutes);

// Root Index Route
app.get("/", (req, res) => {
  res.status(200).json({
    status: "online",
    name: "Sumit Kumar Garsa Portfolio API",
    version: "1.0.0",
    docs: "/api/health",
  });
});

// 8. 404 Route Handler
app.use((req, res) => {
  res.status(404).json({
    status: "error",
    code: "NOT_FOUND",
    message: `Endpoint ${req.originalUrl} does not exist on this server.`,
  });
});

// 9. Centralized Error Handler
app.use((err, req, res, next) => {
  console.error("[Unhandled Server Error]:", err.stack);
  res.status(500).json({
    status: "error",
    code: "INTERNAL_SERVER_ERROR",
    message: process.env.NODE_ENV === "production" ? "An internal server error occurred." : err.message,
  });
});

// 10. Start Server
const server = app.listen(PORT, () => {
  console.log(`[SKG Server] Running on http://localhost:${PORT}`);
  console.log(`[SKG Server] Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`[SKG Server] Permitted CORS Origins: ${allowedOrigins.join(", ")}`);
});

// Graceful Process Termination
const handleShutdown = (signal) => {
  console.log(`[SKG Server] Received ${signal}. Closing HTTP server gracefully...`);
  server.close(() => {
    console.log("[SKG Server] Closed out remaining active connections. Exiting process.");
    process.exit(0);
  });
};

process.on("SIGTERM", () => handleShutdown("SIGTERM"));
process.on("SIGINT", () => handleShutdown("SIGINT"));

export default app;
