import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  projectType: z.string().min(1, "Project type is required"),
  budget: z.string().min(1, "Budget selection is required"),
  message: z.string().min(10, "Message must be at least 10 characters").max(4000),
  honeypot: z.string().max(0, "Bot detected"),
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildEmailHtml({
  name,
  email,
  projectType,
  budget,
  message,
}: {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}): string {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeProjectType = escapeHtml(projectType);
  const safeBudget = escapeHtml(budget);
  const safeMessage = escapeHtml(message);
  const replySubject = encodeURIComponent(`Re: ${projectType} Inquiry`);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Portfolio Contact Inquiry</title>
</head>
<body style="margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0f17; color: #e2e8f0;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #111827; border: 1px solid #1f2937; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); padding: 32px 32px 24px 32px; border-bottom: 2px solid #ff6a1a;">
      <p style="margin: 0 0 6px 0; font-family: 'Courier New', Courier, monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #ff6a1a; font-weight: 700;">
        Direct Contact Form Submission
      </p>
      <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #f9fafb; letter-spacing: -0.02em;">
        New Transmission from ${safeName}
      </h1>
    </div>

    <!-- Content -->
    <div style="padding: 32px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: separate; border-spacing: 0 12px; margin-bottom: 24px;">
        <tr>
          <td width="140" style="font-family: 'Courier New', Courier, monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #94a3b8; vertical-align: top; padding-top: 4px;">
            Sender Name
          </td>
          <td style="font-size: 15px; font-weight: 600; color: #f1f5f9;">
            ${safeName}
          </td>
        </tr>
        <tr>
          <td width="140" style="font-family: 'Courier New', Courier, monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #94a3b8; vertical-align: top; padding-top: 4px;">
            Sender Email
          </td>
          <td style="font-size: 15px; color: #38bdf8;">
            <a href="mailto:${safeEmail}" style="color: #38bdf8; text-decoration: underline;">
              ${safeEmail}
            </a>
          </td>
        </tr>
        <tr>
          <td width="140" style="font-family: 'Courier New', Courier, monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #94a3b8; vertical-align: top; padding-top: 4px;">
            Engagement Scope
          </td>
          <td style="font-size: 14px;">
            <span style="display: inline-block; padding: 4px 12px; background-color: #1e293b; border: 1px solid #334155; border-radius: 6px; font-family: 'Courier New', Courier, monospace; font-size: 12px; color: #4ade80;">
              ${safeProjectType}
            </span>
          </td>
        </tr>
        <tr>
          <td width="140" style="font-family: 'Courier New', Courier, monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #94a3b8; vertical-align: top; padding-top: 4px;">
            Estimated Budget
          </td>
          <td style="font-size: 14px;">
            <span style="display: inline-block; padding: 4px 12px; background-color: #1e293b; border: 1px solid #334155; border-radius: 6px; font-family: 'Courier New', Courier, monospace; font-size: 12px; color: #fbbf24;">
              ${safeBudget}
            </span>
          </td>
        </tr>
      </table>

      <!-- Message Section -->
      <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #1f2937;">
        <p style="margin: 0 0 10px 0; font-family: 'Courier New', Courier, monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #94a3b8; font-weight: 600;">
          Project Scope & Message
        </p>
        <div style="background-color: #0b0f17; border: 1px solid #1f2937; border-radius: 10px; padding: 18px; font-size: 14px; line-height: 1.6; color: #cbd5e1; white-space: pre-wrap;">${safeMessage}</div>
      </div>

      <!-- Quick Reply Action -->
      <div style="margin-top: 28px; text-align: center;">
        <a href="mailto:${safeEmail}?subject=${replySubject}" style="display: inline-block; padding: 14px 32px; background-color: #ff6a1a; color: #ffffff; text-decoration: none; font-size: 13px; font-family: 'Courier New', Courier, monospace; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; border-radius: 9999px; box-shadow: 0 4px 14px rgba(255,106,26,0.35);">
          Reply Directly to ${safeName} &rarr;
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #0b0f17; padding: 18px 32px; border-top: 1px solid #1f2937; text-align: center;">
      <p style="margin: 0; font-family: 'Courier New', Courier, monospace; font-size: 11px; color: #64748b; letter-spacing: 0.05em;">
        Dispatched via Resend &bull; Portfolio Transmission Engine &bull; Reply-To: ${safeEmail}
      </p>
    </div>
  </div>
</body>
</html>`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Zod Validation
    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: validation.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, projectType, budget, message, honeypot } = validation.data;

    // 2. Honeypot Bot Check
    if (honeypot && honeypot.length > 0) {
      return NextResponse.json(
        { success: false, message: "Security exception triggered" },
        { status: 403 }
      );
    }

    // 3. Resend Configuration
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail =
      process.env.RESEND_TO_EMAIL ||
      process.env.CONTACT_RECEIVER_EMAIL ||
      "ersumitkumargarsa@gmail.com";
    const senderEmail =
      process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    // If Resend API key is not configured (e.g. local dev before adding key)
    if (!resendApiKey) {
      console.warn(
        "[CONTACT_API] Warning: RESEND_API_KEY is not defined in environment variables."
      );
      console.log("[CONTACT_API] Simulated transmission dispatch:", {
        to: recipientEmail,
        replyTo: email,
        name,
        email,
        projectType,
        budget,
        messageLength: message.length,
      });

      if (process.env.NODE_ENV === "production") {
        return NextResponse.json(
          {
            success: false,
            message:
              "Email delivery service is currently not configured. Please set RESEND_API_KEY.",
          },
          { status: 500 }
        );
      }

      return NextResponse.json(
        {
          success: true,
          message:
            "Transmission received (Dev simulation mode: RESEND_API_KEY not configured).",
        },
        { status: 200 }
      );
    }

    // 4. Initialize Resend & Dispatch Email
    const resend = new Resend(resendApiKey);

    const emailSubject = `[Portfolio Inquiry] ${projectType} from ${name}`;
    const plainText = `NEW PORTFOLIO INQUIRY\n\nName: ${name}\nEmail: ${email}\nEngagement Scope: ${projectType}\nEstimated Budget: ${budget}\n\nProject Brief:\n${message}\n\n---\nDispatched via Resend (Reply-To: ${email})`;

    const { data, error } = await resend.emails.send({
      from: senderEmail,
      to: [recipientEmail],
      replyTo: email,
      subject: emailSubject,
      text: plainText,
      html: buildEmailHtml({ name, email, projectType, budget, message }),
    });

    if (error) {
      console.error("[RESEND_DISPATCH_ERROR]", error);
      return NextResponse.json(
        {
          success: false,
          message: error.message || "Failed to dispatch email transmission via Resend.",
        },
        { status: 500 }
      );
    }

    console.log("[RESEND_DISPATCH_SUCCESS]", {
      transmissionId: data?.id,
      to: recipientEmail,
      from: senderEmail,
      sender: `${name} <${email}>`,
      projectType,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your project transmission was delivered successfully.",
        transmissionId: data?.id,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("[CONTACT_API_ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred while processing transmission.",
      },
      { status: 500 }
    );
  }
}
