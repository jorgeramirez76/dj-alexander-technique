import { NextResponse } from "next/server";

// Newsletter signups.
// TODO (site owner): connect your ESP (Mailchimp/Beehiiv/ConvertKit/Klaviyo).
// Currently validates the email and logs it so the form works end-to-end.
export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    const valid = typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      return NextResponse.json({ ok: false, error: "Invalid email." }, { status: 400 });
    }
    // eslint-disable-next-line no-console
    console.log("[newsletter subscribe]", email, new Date().toISOString());
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
}
