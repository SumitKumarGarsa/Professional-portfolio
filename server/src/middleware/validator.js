import { body, validationResult } from "express-validator";

export const contactValidationRules = [
  // 1. Honeypot check: If the hidden honeypot field is filled, silently block the bot
  body("website")
    .optional()
    .custom((val) => {
      if (val && val.length > 0) {
        throw new Error("Bot submission detected via honeypot trap.");
      }
      return true;
    }),

  // 2. Name validation
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required.")
    .isLength({ min: 2, max: 100 })
    .withMessage("Name must be between 2 and 100 characters.")
    .escape(),

  // 3. Email validation & sanitization
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required.")
    .isEmail()
    .withMessage("Please enter a valid email address.")
    .normalizeEmail({ gmail_remove_dots: false })
    .isLength({ max: 150 })
    .withMessage("Email must not exceed 150 characters."),

  // 4. Message validation & sanitization
  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message is required.")
    .isLength({ min: 10, max: 5000 })
    .withMessage("Message must be between 10 and 5000 characters.")
    .escape(),

  // 5. Service & Budget fields
  body("service")
    .optional()
    .trim()
    .isLength({ max: 100 })
    .escape(),

  body("budget")
    .optional()
    .trim()
    .isLength({ max: 50 })
    .escape(),

  // 6. Portfolio Mode Validation
  body("mode")
    .optional()
    .isIn(["dev", "cybersec"])
    .withMessage("Mode must be either 'dev' or 'cybersec'."),
];

// Middleware to evaluate validation errors
export function validateContact(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // If honeypot caught a bot, silently return 200 OK so bot doesn't retry with altered params
    const isBot = errors.array().some((err) => err.msg.includes("honeypot"));
    if (isBot) {
      console.warn(`[Security Honeypot] Bot blocked from IP: ${req.ip}`);
      return res.status(200).json({
        status: "success",
        message: "Message processed successfully.",
      });
    }

    return res.status(400).json({
      status: "fail",
      errors: errors.array().map((e) => ({
        field: e.path,
        message: e.msg,
      })),
    });
  }

  next();
}
