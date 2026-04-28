import { NextResponse } from "next/server";
import { Resend } from "resend";
import { generateParentEmail } from "@/lib/emails/parentConfirmation";
import { generateAdminEmail } from "@/lib/emails/adminNotification";

const resend = new Resend(process.env.RESEND_API_KEY);

// Admin email address  change this to Shraddha's actual email
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "shraddha@mathswithshraddha.com";
// The "from" address  must be a verified domain in Resend
const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@mathswithshraddha.com";
const FROM_NAME = "Maths with Shraddha";

interface EnquiryData {
  parentName: string;
  phone: string;
  whatsAppSameAsPhone: boolean;
  whatsAppNumber: string;
  email: string;
  studentName: string;
  grade: string;
  schoolBoard: string;
  courseType: string;
  mode: string;
  studentLevel: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const data: EnquiryData = await request.json();

    // ── Validation ──────────────────────────────────────────────────────────
    if (!data.parentName || !data.phone || !data.studentName || !data.grade) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!/^\d{10}$/.test(data.phone.replace(/\D/g, ""))) {
      return NextResponse.json(
        { error: "Invalid phone number" },
        { status: 400 }
      );
    }

    const submittedAt = new Date().toISOString();

    // ── Log enquiry ─────────────────────────────────────────────────────────
    console.log("New enquiry received:", {
      timestamp: submittedAt,
      parentName: data.parentName,
      phone: data.phone,
      studentName: data.studentName,
      grade: data.grade,
      courseType: data.courseType || "Not specified",
      mode: data.mode || "Not specified",
    });

    // ── Send emails via Resend ───────────────────────────────────────────────
    const emailErrors: string[] = [];

    // 1. Admin notification (always sent)
    try {
      await resend.emails.send({
        from: `${FROM_NAME} <${FROM_EMAIL}>`,
        to: [ADMIN_EMAIL],
        subject: `New Enquiry: ${data.studentName} (${data.grade}) – ${data.parentName}`,
        html: generateAdminEmail({ ...data, submittedAt }),
      });
    } catch (err) {
      console.error("Failed to send admin email:", err);
      emailErrors.push("admin");
    }

    // 2. Parent confirmation (only if they provided an email)
    if (data.email && data.email.trim()) {
      try {
        await resend.emails.send({
          from: `${FROM_NAME} <${FROM_EMAIL}>`,
          to: [data.email.trim()],
          subject: `Enquiry Confirmed – We'll be in touch soon! | Maths with Shraddha`,
          html: generateParentEmail(data),
        });
      } catch (err) {
        console.error("Failed to send parent confirmation email:", err);
        emailErrors.push("parent");
      }
    }

    // ── Respond ─────────────────────────────────────────────────────────────
    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully",
        emailStatus: {
          adminNotified: !emailErrors.includes("admin"),
          parentConfirmed: data.email
            ? !emailErrors.includes("parent")
            : null, // null = no email provided
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Enquiry submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}