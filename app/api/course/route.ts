import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const TO_ANTONIN = "jsem@antoninbouchal.cz";

function createTransport() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

export async function POST(req: Request) {
  try {
    const { course, name, email, phone, company, participants, format, date, message } =
      await req.json();

    if (!name || !email || !course) {
      return NextResponse.json({ error: "Chybí povinné pole." }, { status: 400 });
    }

    const transporter = createTransport();

    // 1) Notifikace pro Antonína – Reply-To = email klienta
    await transporter.sendMail({
      from: `"Web – poptávka kurzu" <${process.env.GMAIL_USER}>`,
      to: TO_ANTONIN,
      replyTo: `"${name}" <${email}>`,
      subject: `Nová poptávka: ${course} – ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
          <div style="background:#ec430f;height:4px;border-radius:4px 4px 0 0"></div>
          <div style="padding:32px;background:#fff;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px">
            <h2 style="margin:0 0 8px;font-size:20px">📚 Nová poptávka kurzu</h2>
            <p style="margin:0 0 24px;font-size:14px;background:#fff7ed;border:1px solid #fed7aa;border-radius:8px;padding:10px 14px;color:#c2410c;font-weight:600">${course}</p>
            <table style="width:100%;border-collapse:collapse;font-size:15px">
              <tr><td style="padding:8px 0;color:#6b7280;width:150px">Jméno</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#6b7280">E-mail</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#ec430f">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding:8px 0;color:#6b7280">Telefon</td><td style="padding:8px 0">${phone}</td></tr>` : ""}
              ${company ? `<tr><td style="padding:8px 0;color:#6b7280">Firma</td><td style="padding:8px 0">${company}</td></tr>` : ""}
              ${participants ? `<tr><td style="padding:8px 0;color:#6b7280">Účastníků</td><td style="padding:8px 0">${participants}</td></tr>` : ""}
              ${format ? `<tr><td style="padding:8px 0;color:#6b7280">Forma</td><td style="padding:8px 0">${format}</td></tr>` : ""}
              ${date ? `<tr><td style="padding:8px 0;color:#6b7280">Termín</td><td style="padding:8px 0">${date}</td></tr>` : ""}
            </table>
            ${message ? `
            <hr style="margin:20px 0;border:none;border-top:1px solid #f3f4f6">
            <p style="color:#6b7280;font-size:13px;margin:0 0 8px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em">Zpráva</p>
            <p style="white-space:pre-wrap;line-height:1.7;margin:0">${message}</p>
            ` : ""}
            <hr style="margin:24px 0;border:none;border-top:1px solid #f3f4f6">
            <p style="color:#9ca3af;font-size:12px;margin:0">Kliknutím na Odpovědět odepíšete přímo na <strong>${email}</strong></p>
          </div>
        </div>
      `,
    });

    // 2) Potvrzení pro klienta
    await transporter.sendMail({
      from: `"Antonín Bouchal" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Potvrzení poptávky: ${course}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
          <div style="background:#ec430f;height:4px;border-radius:4px 4px 0 0"></div>
          <div style="padding:32px;background:#fff;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px">
            <h2 style="margin:0 0 16px;font-size:20px">Ahoj ${name},</h2>
            <p style="line-height:1.7;margin:0 0 16px">děkuji za zájem o kurz <strong>${course}</strong>. Ozvu se vám co nejdříve, nejpozději do&nbsp;<strong>24&nbsp;hodin</strong>, abychom domluvili detaily.</p>
            <p style="line-height:1.7;margin:0 0 24px">Pokud potřebujete cokoliv urgentního, zavolejte mi na <a href="tel:+420736729646" style="color:#ec430f;font-weight:600">+420&nbsp;736&nbsp;729&nbsp;646</a>.</p>
            <p style="margin:0">S pozdravem,<br><strong>Antonín Bouchal</strong></p>
            <hr style="margin:24px 0;border:none;border-top:1px solid #f3f4f6">
            <p style="color:#9ca3af;font-size:12px;margin:0">Automatická zpráva z formuláře na <a href="https://www.antoninbouchal.cz" style="color:#9ca3af">antoninbouchal.cz</a></p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Course API error:", err);
    return NextResponse.json({ error: "Odeslání selhalo." }, { status: 500 });
  }
}
