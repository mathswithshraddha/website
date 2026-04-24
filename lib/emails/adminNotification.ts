interface AdminEmailData {
  parentName: string;
  phone: string;
  whatsAppSameAsPhone: boolean;
  whatsAppNumber: string;
  email?: string;
  studentName: string;
  grade: string;
  schoolBoard?: string;
  courseType: string;
  mode: string;
  studentLevel: string;
  message?: string;
  submittedAt: string;
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

const levelColors: Record<string, string> = {
  "needs-improvement": "#ef4444",
  average: "#f59e0b",
  strong: "#22c55e",
};

export function generateAdminEmail(data: AdminEmailData): string {
  const courseLabel = courseTypeLabels[data.courseType] || data.courseType || "Not specified";
  const modeLabel = modeLabels[data.mode] || data.mode || "Not specified";
  const levelLabel = levelLabels[data.studentLevel] || data.studentLevel || "Not specified";
  const levelColor = levelColors[data.studentLevel] || "#94a3b8";
  const boardLabel = data.schoolBoard || "Not specified";
  const whatsappContact = data.whatsAppSameAsPhone ? data.phone : (data.whatsAppNumber || data.phone);
  const formattedDate = new Date(data.submittedAt).toLocaleString("en-IN", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });

  const waLink = `https://wa.me/91${whatsappContact.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hi ${data.parentName}! This is Shraddha from Maths with Shraddha. I received your enquiry for ${data.studentName} (${data.grade}) – ${courseLabel}. Would love to connect and discuss further. When would be a good time for a quick call?`
  )}`;

  const callLink = `tel:+91${data.phone.replace(/\D/g, "")}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Enquiry – Maths with Shraddha Admin</title>
</head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;background:#0f172a;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="620" cellpadding="0" cellspacing="0" style="max-width:620px;width:100%;border-radius:16px;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,0.4);">

          <!-- Admin Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#d0433b 0%,#9b1c1c 100%);padding:28px 36px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0;color:rgba(255,255,255,0.7);font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:2px;">Admin Notification</p>
                    <h1 style="margin:4px 0 0;color:#ffffff;font-size:22px;font-weight:800;">New Enquiry Received</h1>
                  </td>
                  <td align="right" style="vertical-align:top;">
                    <span style="display:inline-block;background:rgba(255,255,255,0.15);color:#ffffff;font-size:11px;font-weight:700;padding:4px 12px;border-radius:20px;white-space:nowrap;">
                      Date: ${formattedDate}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Quick Action Buttons -->
          <tr>
            <td style="background:#1e293b;padding:16px 36px;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-right:10px;">
                    <a href="${waLink}"
                       style="display:inline-block;background:#25D366;color:#ffffff;font-size:13px;font-weight:700;text-decoration:none;padding:10px 20px;border-radius:8px;">
                      WhatsApp
                    </a>
                  </td>
                  <td style="padding-right:10px;">
                    <a href="${callLink}"
                       style="display:inline-block;background:#3b82f6;color:#ffffff;font-size:13px;font-weight:700;text-decoration:none;padding:10px 20px;border-radius:8px;">
                      Call Now
                    </a>
                  </td>
                  ${data.email ? `
                  <td>
                    <a href="mailto:${data.email}"
                       style="display:inline-block;background:#8b5cf6;color:#ffffff;font-size:13px;font-weight:700;text-decoration:none;padding:10px 20px;border-radius:8px;">
                      Email
                    </a>
                  </td>` : ""}
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="background:#1e293b;padding:0 36px 36px;">

              <!-- Parent + Student at a Glance -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td width="48%" style="background:#0f172a;border-radius:12px;padding:20px;vertical-align:top;margin-right:10px;">
                    <p style="margin:0 0 10px;font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:1.5px;">Parent</p>
                    <p style="margin:0 0 4px;font-size:18px;font-weight:800;color:#f1f5f9;">${data.parentName}</p>
                    <p style="margin:0 0 2px;font-size:13px;color:#94a3b8;">Phone: ${data.phone}</p>
                    ${data.email ? `<p style="margin:0;font-size:13px;color:#94a3b8;">Email: ${data.email}</p>` : ""}
                    ${!data.whatsAppSameAsPhone && data.whatsAppNumber ? `<p style="margin:4px 0 0;font-size:12px;color:#64748b;">WhatsApp: ${data.whatsAppNumber}</p>` : ""}
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="background:#0f172a;border-radius:12px;padding:20px;vertical-align:top;">
                    <p style="margin:0 0 10px;font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:1.5px;">Student</p>
                    <p style="margin:0 0 4px;font-size:18px;font-weight:800;color:#f1f5f9;">${data.studentName}</p>
                    <p style="margin:0 0 2px;font-size:13px;color:#94a3b8;">${data.grade}${data.schoolBoard ? ` &bull; ${boardLabel}` : ""}</p>
                    <span style="display:inline-block;margin-top:6px;background:${levelColor}22;color:${levelColor};font-size:12px;font-weight:700;padding:3px 10px;border-radius:20px;border:1px solid ${levelColor}44;">
                      ${levelLabel}
                    </span>
                  </td>
                </tr>
              </table>

              <!-- Course Details Row -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;border-radius:12px;padding:20px;margin-bottom:24px;">
                <tr>
                  <td>
                    <p style="margin:0 0 16px;font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:1.5px;">Course Interest</p>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        ${[
                          { label: "Course Type", value: courseLabel },
                          { label: "Mode", value: modeLabel },
                        ]
                          .map(
                            (item) => `
                        <td width="50%" style="vertical-align:top;padding-right:12px;">
                          <p style="margin:0 0 4px;font-size:11px;color:#475569;text-transform:uppercase;letter-spacing:1px;">${item.label}</p>
                          <p style="margin:0;font-size:15px;font-weight:700;color:#e2e8f0;">${item.value}</p>
                        </td>`
                          )
                          .join("")}
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              ${data.message ? `
              <!-- Message -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;border-radius:12px;padding:20px;margin-bottom:24px;border-left:4px solid #d0433b;">
                <tr>
                  <td>
                    <p style="margin:0 0 8px;font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:1.5px;">Message from Parent</p>
                    <p style="margin:0;font-size:14px;color:#cbd5e1;line-height:1.7;font-style:italic;">"${data.message}"</p>
                  </td>
                </tr>
              </table>` : ""}

              <!-- Follow-up Reminder -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#d0433b22,#9b1c1c22);border:1px solid #d0433b44;border-radius:12px;padding:20px;">
                <tr>
                  <td>
                    <p style="margin:0 0 6px;font-size:13px;font-weight:800;color:#fca5a5;">Respond within 24 hours for best conversion</p>
                    <p style="margin:0;font-size:12px;color:#f87171;line-height:1.5;">Studies show that enquiries responded to within 1 hour convert 7x better. Use the quick action buttons above to reach out immediately.</p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0f172a;border-top:1px solid #1e293b;padding:20px 36px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#475569;">
                This is an automated admin notification from <strong style="color:#64748b;">Maths with Shraddha</strong> enquiry system.
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
