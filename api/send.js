import nodemailer from "nodemailer";

/**
 * Save the submission in the LeadHub dashboard.
 * Set LEADHUB_URL (Vercel env / .env.local) to the full webhook URL, e.g.
 *   http://localhost/leadhub/api/lead.php?key=YOUR_WEBHOOK_KEY
 * If LEADHUB_URL is not set this does nothing, so the form keeps working as before.
 */
async function saveToLeadHub(fields) {
  const url = process.env.LEADHUB_URL;
  if (!url) return false;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`LeadHub responded ${res.status}`);
  return true;
}

export async function POST(req) {
  try {
    const { name, email, phone, company, message } = await req.json();
    const page = req.headers.get("referer") || "";

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const sendEmail = transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_TO,
      subject: "New Contact Form",
      html: `
      <h3>New Contact Form</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      ${company ? `<p><b>Company:</b> ${company}</p>` : ""}
      <p><b>Message:</b> ${message}</p>
    `,
    });

    // Email the client and store the lead at the same time; one failing never blocks the other.
    const [mailResult, leadResult] = await Promise.allSettled([
      sendEmail,
      saveToLeadHub({ name, email, phone, company, message, "Page URL": page }),
    ]);

    if (mailResult.status === "rejected") console.log("MAIL ERROR:", mailResult.reason);
    if (leadResult.status === "rejected") console.log("LEADHUB ERROR:", leadResult.reason);

    const mailOk = mailResult.status === "fulfilled";
    const leadOk = leadResult.status === "fulfilled" && leadResult.value === true;

    // The visitor sees "thank you" as long as the enquiry reached the client by email or the dashboard.
    if (mailOk || leadOk) return Response.json({ success: true });
    return Response.json(
      { success: false, error: mailResult.reason?.message || "Send failed" },
      { status: 500 }
    );
  } catch (error) {
    console.log("MAIL ERROR:", error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
