import nodemailer from "nodemailer";

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    console.warn(
      "[Nodemailer] SMTP credentials not fully configured. Email notifications will be logged to console instead of dispatched."
    );
    return null;
  }

  transporter = nodemailer.createTransport({
    host,
    port: parseInt(process.env.SMTP_PORT || "587", 10),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass },
  });

  return transporter;
}

export async function sendContactNotification({ name, email, service, budget, message, mode, ip }) {
  const mailer = getTransporter();
  const receiver = process.env.CONTACT_RECEIVER_EMAIL || "sumitkumargarsa@gmail.com";
  const isCyber = mode === "cybersec";

  const subject = isCyber
    ? `[SECURITY AUDIT BRIEF] New transmission from ${name}`
    : `[MERN INQUIRY] New project note from ${name}`;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: ${isCyber ? "#0A0D0B" : "#F6F1E7"}; color: ${isCyber ? "#E2FBEF" : "#141414"}; padding: 24px; }
          .container { max-width: 600px; margin: 0 auto; background: ${isCyber ? "#101612" : "#FFFFFF"}; border-radius: 16px; border: 1px solid ${isCyber ? "#1E3327" : "#D9CFBE"}; padding: 32px; }
          .header { font-size: 20px; font-weight: bold; margin-bottom: 20px; color: ${isCyber ? "#00FF9C" : "#FF6A1A"}; border-bottom: 1px solid ${isCyber ? "#1E3327" : "#EFE8DC"}; padding-bottom: 12px; }
          .field { margin-bottom: 14px; font-size: 14px; }
          .label { font-weight: 600; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em; color: ${isCyber ? "#6B8B77" : "#6B6257"}; display: block; margin-bottom: 4px; }
          .value { background: ${isCyber ? "#080B09" : "#F6F1E7"}; padding: 10px 14px; border-radius: 8px; font-family: monospace; font-size: 13px; }
          .message-box { background: ${isCyber ? "#080B09" : "#F6F1E7"}; padding: 14px; border-radius: 8px; font-size: 14px; line-height: 1.6; white-space: pre-wrap; }
          .footer { margin-top: 24px; font-size: 11px; color: ${isCyber ? "#6B8B77" : "#6B6257"}; border-top: 1px solid ${isCyber ? "#1E3327" : "#EFE8DC"}; padding-top: 12px; font-family: monospace; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            ${isCyber ? "🛡️ ENCRYPTED SECURITY SCOPE BRIEF" : "💻 MERN STACK PROJECT TRANSMISSION"}
          </div>

          <div class="field">
            <span class="label">Client / Sender:</span>
            <div class="value">${name} &lt;${email}&gt;</div>
          </div>

          <div class="field">
            <span class="label">Target Category / Service:</span>
            <div class="value">${service || "Not Specified"}</div>
          </div>

          <div class="field">
            <span class="label">Scope / Budget Parameter:</span>
            <div class="value">${budget || "Not Specified"}</div>
          </div>

          <div class="field">
            <span class="label">Project / Scope Parameters:</span>
            <div class="message-box">${message}</div>
          </div>

          <div class="footer">
            Portfolio Mode: ${mode.toUpperCase()} &bull; IP: ${ip} &bull; Timestamp: ${new Date().toISOString()}
          </div>
        </div>
      </body>
    </html>
  `;

  if (!mailer) {
    console.log("--------------------------------------------------");
    console.log(`[Email Simulation] To: ${receiver}`);
    console.log(`[Subject] ${subject}`);
    console.log(`[Sender] ${name} (${email})`);
    console.log(`[Service] ${service} | Budget: ${budget}`);
    console.log(`[Message] ${message}`);
    console.log("--------------------------------------------------");
    return { success: true, simulated: true };
  }

  try {
    const info = await mailer.sendMail({
      from: `"SKG Portfolio Notifications" <${process.env.SMTP_USER}>`,
      to: receiver,
      replyTo: email,
      subject,
      html: htmlContent,
    });

    console.log(`[Nodemailer] Email dispatched successfully: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("[Nodemailer] Failed to send email alert:", error.message);
    // Don't throw; we still want to save contact in database
    return { success: false, error: error.message };
  }
}
