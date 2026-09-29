import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env["RESEND_API_KEY"]);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, company, inquiryType, message } = body;

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Email HTML Template
    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #E2E8F0; border-radius: 8px; overflow: hidden; color: #0F172A;">
        <div style="background-color: #2866A3; padding: 24px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase;">New Contact Enquiry</h1>
        </div>
        <div style="padding: 32px 24px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tbody>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #F1F5F9; width: 140px;"><strong style="color: #64748B; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Name</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #F1F5F9; font-size: 15px; font-weight: 500;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #F1F5F9;"><strong style="color: #64748B; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Email</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #F1F5F9; font-size: 15px;">
                  <a href="mailto:${email}" style="color: #2866A3; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #F1F5F9;"><strong style="color: #64748B; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Phone</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #F1F5F9; font-size: 15px;">${phone || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #F1F5F9;"><strong style="color: #64748B; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Company</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #F1F5F9; font-size: 15px;">${company || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #F1F5F9;"><strong style="color: #64748B; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Project Type</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #F1F5F9; font-size: 15px; font-weight: 500;">${inquiryType}</td>
              </tr>
            </tbody>
          </table>
          
          <div style="margin-top: 32px;">
            <strong style="display: block; color: #64748B; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px;">Message</strong>
            <div style="background-color: #F8FAFC; padding: 20px; border-radius: 6px; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          </div>
        </div>
        <div style="background-color: #F8FAFC; padding: 16px; text-align: center; border-top: 1px solid #E2E8F0;">
          <p style="margin: 0; font-size: 12px; color: #94A3B8;">This email was sent from the FusionTech Website Contact Form.</p>
        </div>
      </div>
    `;

    const contactEmail = process.env["CONTACT_EMAIL"] || "fusiontechexperts2025@gmail.com";

    // Send email using Resend
    const data = await resend.emails.send({
      from: "FusionTech Website <onboarding@resend.dev>", // Note: Use verified domain in production
      to: [contactEmail],
      replyTo: email,
      subject: `New FusionTech Contact Enquiry — ${fullName}`,
      html: htmlContent,
    });

    if (data.error) {
      console.error("Resend API error:", data.error);
      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, id: data.data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Server error processing contact form:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
