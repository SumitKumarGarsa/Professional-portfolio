import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  projectType: z.string().min(1, "Project type is required"),
  budget: z.string().min(1, "Budget selection is required"),
  message: z.string().min(10, "Message must be at least 10 characters").max(4000),
  honeypot: z.string().max(0, "Bot detected"),
});

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

    // 3. Log sanitized transmission for development & staging
    console.log("[INCOMING CONTACT TRANSMISSION]", {
      timestamp: new Date().toISOString(),
      name,
      email,
      projectType,
      budget,
      messageLength: message.length,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your project transmission was delivered successfully.",
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
