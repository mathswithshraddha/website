interface ParentEmailData {
  parentName: string;
  studentName: string;
  grade: string;
  schoolBoard?: string;
  courseType: string;
  mode: string;
  studentLevel: string;
  phone: string;
  email?: string;
  message?: string;
}

const courseTypeLabels: Record<string, string> = {
  regular: "Regular Maths",
  olympiad: "Olympiad Preparation",
  mental: "Mental Maths",
  "not-sure": "Not Sure Yet",
};

const modeLabels: Record<string, string> = {
  online: "Online Live Classes",
  offline: "Offline (Kanjurmarg Centre)",
};

const levelLabels: Record<string, string> = {
  "needs-improvement": "Needs Help",
  average: "Average",
  strong: "Strong",
};

export function generateParentEmail(data: ParentEmailData): string {
  const courseLabel = courseTypeLabels[data.courseType] || data.courseType || "Not specified";
  const modeLabel = modeLabels[data.mode] || data.mode || "Not specified";
  const levelLabel = levelLabels[data.studentLevel] || data.studentLevel || "Not specified";
  const boardLabel = data.schoolBoard || "Not specified";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Enquiry Received – Maths with Shraddha</title>
</head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;background:#f5f5f5;">

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#111f3c 0%,#1e3a6e 100%);padding:40px 40px 36px;text-align:center;">
              <div style="display:inline-block;background:rgba(255,255,255,0.12);border-radius:50%;width:64px;height:64px;line-height:64px;text-align:center;margin-bottom:16px;">
                <span style="font-size:28px; color: #ffffff;">M</span>
              </div>
              <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:800;letter-spacing:-0.5px;">Maths with Shraddha</h1>
              <p style="margin:6px 0 0;color:rgba(255,255,255,0.65);font-size:13px;text-transform:uppercase;letter-spacing:2px;">Enquiry Confirmation</p>
            </td>
          </tr>

          <!-- Green Success Bar -->
          <tr>
            <td style="background:#22c55e;padding:14px 40px;text-align:center;">
              <p style="margin:0;color:#ffffff;font-size:14px;font-weight:700;">
                Your enquiry has been successfully received!
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <p style="margin:0 0 8px;font-size:22px;font-weight:800;color:#111f3c;">Hello, ${data.parentName}!</p>
              <p style="margin:0 0 28px;font-size:15px;color:#64748b;line-height:1.6;">
                Thank you for reaching out. We've received your enquiry and Shraddha Ma'am, who has been teaching mathematics since 1991, will review the details and contact you personally within <strong style="color:#111f3c;">24 hours</strong> to schedule a free consultation.
              </p>

              <!-- Summary Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;margin-bottom:28px;">
                <tr>
                  <td style="background:#111f3c;padding:14px 20px;">
                    <p style="margin:0;color:#ffffff;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;">Enquiry Summary</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      ${[
      ["Student Name", data.studentName],
      ["Grade / Class", data.grade],
      ["School Board", boardLabel],
      ["Course Interest", courseLabel],
      ["Preferred Mode", modeLabel],
      ["Current Level", levelLabel],
      ["Contact Number", data.phone],
      ...(data.email ? [["Email", data.email] as [string, string]] : []),
      ...(data.message ? [["Your Message", data.message] as [string, string]] : []),
    ]
      .map(
        ([label, value]) => `
                      <tr>
                        <td style="padding:8px 0;border-bottom:1px solid #f1f5f9;vertical-align:top;width:45%;">
                          <span style="font-size:12px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.8px;">${label}</span>
                        </td>
                        <td style="padding:8px 0;border-bottom:1px solid #f1f5f9;vertical-align:top;">
                          <span style="font-size:14px;font-weight:600;color:#1e293b;">${value}</span>
                        </td>
                      </tr>`
      )
      .join("")}
                    </table>
                  </td>
                </tr>
              </table>

              <!-- What to Expect -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#fffbeb;border:1px solid #fde68a;border-radius:12px;margin-bottom:28px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 12px;font-size:14px;font-weight:800;color:#92400e;">What happens next?</p>
                    <table cellpadding="0" cellspacing="0">
                      ${[
      ["Within 24 hrs", "Shraddha reviews your enquiry & calls you"],
      ["Discovery Call", "Free 15-min consultation to understand your child's needs"],
      ["Trial Class", "Schedule a complimentary trial class"],
      ["Enrollment", "Choose your batch and start your journey!"],
    ]
      .map(
        ([step, desc], i) => `
                      <tr>
                        <td style="padding:5px 12px 5px 0;vertical-align:top;">
                          <span style="display:inline-block;background:#d0433b;color:#ffffff;font-size:11px;font-weight:800;border-radius:20px;padding:2px 8px;">${i + 1}</span>
                        </td>
                        <td style="padding:5px 0;vertical-align:top;">
                          <strong style="font-size:13px;color:#78350f;">${step}</strong>
                          <span style="font-size:13px;color:#92400e;">  ${desc}</span>
                        </td>
                      </tr>`
      )
      .join("")}
                    </table>
                  </td>
                </tr>
              </table>

              <!-- WhatsApp CTA -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="https://wa.me/919969174811?text=${encodeURIComponent(`Hi Shraddha! I'm ${data.parentName}, parent of ${data.studentName} (${data.grade}). I just submitted an enquiry for ${courseLabel}. Looking forward to connecting!`)}"
                       style="display:inline-block;background:#25D366;color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:50px;margin-bottom:12px;">
                      Chat with Shraddha Mam on WhatsApp
                    </a>
                    <br/>
                    <span style="font-size:12px;color:#94a3b8;">For immediate assistance or quick questions</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:28px 40px;text-align:center;">
              <p style="margin:0 0 4px;font-size:13px;font-weight:700;color:#111f3c;">Maths with Shraddha</p>
              <p style="margin:0 0 12px;font-size:12px;color:#94a3b8;">Kanjurmarg, Mumbai | Grades 1–10 | Online & Offline</p>
              <p style="margin:0;font-size:11px;color:#cbd5e1;">
                You're receiving this email because you submitted an enquiry on our website. We will never share your data.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
}
