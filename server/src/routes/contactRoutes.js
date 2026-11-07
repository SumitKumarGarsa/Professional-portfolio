import { Router } from "express";
import { submitContactForm } from "../controllers/contactController.js";
import { contactLimiter } from "../middleware/rateLimiter.js";
import { contactValidationRules, validateContact } from "../middleware/validator.js";

const router = Router();

// POST /api/contact
// Rate limited to 5 requests per 15 mins, honeypot protected, input sanitized
router.post("/", contactLimiter, contactValidationRules, validateContact, submitContactForm);

export default router;
