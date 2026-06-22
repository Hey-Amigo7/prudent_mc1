import { NextRequest, NextResponse } from "next/server";

// Per-instance in-memory rate limiter: 5 submissions per IP per 15 minutes.
// Sufficient for a low-traffic site on Vercel; instances stay warm for the window.
const rateLimits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimits.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimits.set(ip, { count: 1, resetAt: now + 15 * 60 * 1000 });
    return false;
  }
  if (entry.count >= 5) return true;
  entry.count++;
  return false;
}

const VALID_INQUIRY_TYPES = new Set([
  "Business Loan",
  "Personal Loan",
  "Asset Financing",
  "Entrepreneurship Funding",
  "Salary Earner Loan",
  "Loan Repayment Enquiry",
  "General Inquiry",
  "Career Opportunities",
]);

function sanitize(s: string): string {
  return s.replace(/[<>]/g, "").trim();
}

function isValidEmail(s: string): boolean {
  return s.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill this hidden field, real users never see it
  if (body.website) {
    return NextResponse.json({ success: true });
  }

  const { firstName, lastName, email, company, phone, inquiryType, message } =
    body as Record<string, string>;

  if (!firstName?.trim() || firstName.length > 50)
    return NextResponse.json(
      { error: "First name is required (max 50 characters)." },
      { status: 400 }
    );
  if (!lastName?.trim() || lastName.length > 50)
    return NextResponse.json(
      { error: "Last name is required (max 50 characters)." },
      { status: 400 }
    );
  if (!email || !isValidEmail(email))
    return NextResponse.json(
      { error: "A valid email address is required." },
      { status: 400 }
    );
  if (!message?.trim() || message.trim().length < 10 || message.length > 2000)
    return NextResponse.json(
      { error: "Message must be between 10 and 2000 characters." },
      { status: 400 }
    );
  if (company && company.length > 100)
    return NextResponse.json(
      { error: "Company name must be under 100 characters." },
      { status: 400 }
    );
  if (phone && phone.length > 20)
    return NextResponse.json(
      { error: "Phone must be under 20 characters." },
      { status: 400 }
    );
  if (inquiryType && !VALID_INQUIRY_TYPES.has(inquiryType))
    return NextResponse.json(
      { error: "Invalid inquiry type." },
      { status: 400 }
    );

  const data = {
    firstName: sanitize(firstName),
    lastName: sanitize(lastName),
    email: email.trim().toLowerCase(),
    company: company ? sanitize(company) : "",
    phone: phone ? sanitize(phone) : "",
    inquiryType: inquiryType || "General Inquiry",
    message: sanitize(message),
  };

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[Contact Form - DEV] Submission received:", data);
      return NextResponse.json({ success: true });
    }
    return NextResponse.json(
      {
        error:
          "Email service not configured. Please contact us directly at info@prudentmicrocredit.com.",
      },
      { status: 500 }
    );
  }

  const toEmail =
    process.env.CONTACT_TO_EMAIL ?? "info@prudentmicrocredit.com";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "noreply@prudentmicrocredit.com";

  const safeMessage = data.message
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");

  const optionalRows = [
    data.phone
      ? `<tr style="border-top:1px solid #f0f0f0"><td style="padding:10px 0;color:#888;width:140px;font-size:13px;vertical-align:top">Phone</td><td style="padding:10px 0;font-size:14px"><strong>${data.phone}</strong></td></tr>`
      : "",
    data.company
      ? `<tr style="border-top:1px solid #f0f0f0"><td style="padding:10px 0;color:#888;font-size:13px;vertical-align:top">Company</td><td style="padding:10px 0;font-size:14px"><strong>${data.company}</strong></td></tr>`
      : "",
  ].join("");

  const emailHtml = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9f9f9;padding:20px">
      <div style="background:#0C0A08;padding:20px 24px;border-radius:8px 8px 0 0">
        <h2 style="color:#F07C00;margin:0;font-size:18px">New Contact Form Submission</h2>
        <p style="color:#888;margin:4px 0 0;font-size:12px">From prudentmicrocredit.com</p>
      </div>
      <div style="background:white;padding:24px;border-radius:0 0 8px 8px;border:1px solid #eee;border-top:none">
        <table style="width:100%;border-collapse:collapse">
          <tr>
            <td style="padding:10px 0;color:#888;width:140px;font-size:13px;vertical-align:top">Name</td>
            <td style="padding:10px 0;font-size:14px"><strong>${data.firstName} ${data.lastName}</strong></td>
          </tr>
          <tr style="border-top:1px solid #f0f0f0">
            <td style="padding:10px 0;color:#888;font-size:13px;vertical-align:top">Email</td>
            <td style="padding:10px 0;font-size:14px">
              <a href="mailto:${data.email}" style="color:#F07C00;text-decoration:none">${data.email}</a>
            </td>
          </tr>
          ${optionalRows}
          <tr style="border-top:1px solid #f0f0f0">
            <td style="padding:10px 0;color:#888;font-size:13px;vertical-align:top">Inquiry</td>
            <td style="padding:10px 0">
              <span style="background:#F07C00;color:#0C0A08;padding:3px 10px;border-radius:4px;font-size:12px;font-weight:bold">${data.inquiryType}</span>
            </td>
          </tr>
        </table>
        <div style="margin-top:20px;padding-top:20px;border-top:2px solid #f0f0f0">
          <p style="color:#888;font-size:12px;margin:0 0 10px;text-transform:uppercase;letter-spacing:.05em">Message</p>
          <p style="color:#333;line-height:1.7;margin:0;font-size:14px">${safeMessage}</p>
        </div>
        <div style="margin-top:24px;text-align:right">
          <a href="mailto:${data.email}?subject=Re:%20Your%20Inquiry%20at%20Prudent%20Micro%20Credit"
             style="display:inline-block;background:#F07C00;color:#0C0A08;padding:10px 20px;border-radius:6px;text-decoration:none;font-size:13px;font-weight:bold">
            Reply to ${data.firstName} &rarr;
          </a>
        </div>
      </div>
      <p style="color:#bbb;font-size:11px;text-align:center;margin-top:14px">
        Automated message from the Prudent Micro Credit contact form
      </p>
    </div>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Prudent Micro Credit <${fromEmail}>`,
        to: [toEmail],
        reply_to: data.email,
        subject: `[PMC Inquiry] ${data.inquiryType} — ${data.firstName} ${data.lastName}`,
        html: emailHtml,
      }),
    });

    if (!response.ok) {
      console.error("Resend API error:", await response.text());
      return NextResponse.json(
        {
          error:
            "Failed to send message. Please try again or contact us directly at info@prudentmicrocredit.com.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      {
        error:
          "Network error. Please try again or contact us at info@prudentmicrocredit.com.",
      },
      { status: 500 }
    );
  }
}
