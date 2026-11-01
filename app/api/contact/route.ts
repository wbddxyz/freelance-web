import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

   const {
  name,
  business,
  email,
  service,
  budget,
  message,
  turnstileToken,
} = body;

if (!turnstileToken) {
  return Response.json(
    { error: "Security verification failed." },
    { status: 400 }
  );
}

const turnstileResponse = await fetch(
  "https://challenges.cloudflare.com/turnstile/v0/siteverify",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: turnstileToken,
    }),
  }
);

const turnstileResult = await turnstileResponse.json();

if (!turnstileResult.success) {
  return Response.json(
    { error: "Security verification failed." },
    { status: 403 }
  );
}

    if (!name || !email || !message) {
      return Response.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Website Enquiry <onboarding@resend.dev>",
      to: ["wbdd.xyz@gmail.com"],
      replyTo: email,
      subject: `New website enquiry from ${name}`,
      html: `
        <h2>New Website Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business:</strong> ${business || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service || "Not provided"}</p>
        <p><strong>Budget:</strong> ${budget || "Not provided"}</p>

        <h3>Message</h3>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);

    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
