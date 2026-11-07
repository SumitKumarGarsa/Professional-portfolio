import { Contact } from "../models/Contact.js";
import { sendContactNotification } from "../services/emailService.js";

export async function submitContactForm(req, res) {
  try {
    const { name, email, service, budget, message, mode = "dev" } = req.body;
    const clientIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "Unknown";
    const userAgent = req.headers["user-agent"] || "Unknown";

    let savedRecord = null;

    // 1. Save to MongoDB if available
    try {
      savedRecord = await Contact.create({
        name,
        email,
        service: service || "General Inquiry",
        budget: budget || "Unspecified",
        message,
        mode,
        ip: String(clientIp),
        userAgent: String(userAgent),
      });
      console.log(`[Contact] New record created in MongoDB with ID: ${savedRecord._id}`);
    } catch (dbErr) {
      console.warn("[Contact] MongoDB write skipped or unavailable:", dbErr.message);
    }

    // 2. Dispatch Email Notification
    const emailResult = await sendContactNotification({
      name,
      email,
      service,
      budget,
      message,
      mode,
      ip: clientIp,
    });

    // 3. Return sanitized response
    return res.status(201).json({
      status: "success",
      message:
        mode === "cybersec"
          ? "Security scope brief successfully received and queued for technical review."
          : "Thank you for reaching out. Your project message has been received.",
      data: {
        id: savedRecord ? savedRecord._id : `mock_${Date.now()}`,
        name,
        email,
        mode,
        emailDispatched: !!emailResult.success,
      },
    });
  } catch (error) {
    console.error("[Contact Controller Error]:", error);
    return res.status(500).json({
      status: "error",
      message: "An internal server error occurred while processing your message. Please try again later.",
    });
  }
}
