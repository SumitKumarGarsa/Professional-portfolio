import rateLimit from "express-rate-limit";

// Rate limiting for the contact endpoint to mitigate spam & DoS abuse
export const contactLimiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || "900000", 10), // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || "5", 10), // Max 5 submissions per 15 minutes per IP
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: {
    status: "error",
    code: "RATE_LIMIT_EXCEEDED",
    message: "Too many contact submissions from this IP address. Please wait 15 minutes before retrying.",
  },
  handler: (req, res, next, options) => {
    console.warn(`[Security Alert] Rate limit exceeded for IP: ${req.ip} on route ${req.originalUrl}`);
    res.status(options.statusCode).json(options.message);
  },
});

// General API rate limiter for all endpoints (100 requests per 15 mins)
export const globalApiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    status: "error",
    code: "TOO_MANY_REQUESTS",
    message: "Too many requests to the API. Please try again later.",
  },
});
