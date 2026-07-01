import { NextResponse } from "next/server";

// Booking inquiries.
// TODO (site owner): wire this to email (Resend/SendGrid/Nodemailer) or a CRM.
// It currently validates input and logs server-side so the form works end-to-end.
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body ?? {};
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
    }
    // eslint-disable-next-line no-console
    console.log("[booking inquiry]", {
      name,
      email,
      company: body.company ?? "",
      type: body.type ?? "",
      date: body.date ?? "",
      city: body.city ?? "",
      venue: body.venue ?? "",
      message,
      at: new Date().toISOString(),
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
}
