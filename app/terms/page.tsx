import Navbar from "@/components/Navbar";
import Link from "next/link";
import { buildBasicPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildBasicPageMetadata({
  path: "/terms",
  title: "Terms of Service | Maths with Shraddha",
  description:
    "Read our terms of service to understand the rules and guidelines for using the Maths with Shraddha website and services.",
  robots: {
    index: false,
    follow: true,
  },
});

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <div className="bg-orange text-white px-8 py-3 rounded-full text-2xl sm:text-3xl font-heading font-bold shadow-md text-center">
              Terms of Service
            </div>
            <p className="mt-4 text-sm text-gray-500">Last updated: May 2025</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 sm:p-12 space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-primary mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using the Maths with Shraddha website (mathswithshraddha.com), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">2. Services Provided</h2>
              <p>Maths with Shraddha provides mathematics coaching for students in Grades 1–10, including regular academic support, Olympiad preparation, and Mental Maths programs. Classes are offered both online and at our offline centre in Mumbai.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">3. Enrollment & Fees</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Enrollment is subject to availability of seats in the relevant batch.</li>
                <li>Fees are as communicated at the time of enrollment and are subject to change with prior notice.</li>
                <li>A free trial session may be offered before enrollment, subject to availability.</li>
                <li>Fees once paid are generally non-refundable unless otherwise communicated in writing.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">4. Student Conduct</h2>
              <p>Students are expected to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Attend classes punctually and regularly</li>
                <li>Complete assigned homework and practice materials</li>
                <li>Treat the teacher and fellow students with respect</li>
                <li>Not record or share class sessions without prior written permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">5. Intellectual Property</h2>
              <p>All content on this website — including text, images, study materials, worksheets, and videos — is the intellectual property of Maths with Shraddha. You may not reproduce, distribute, or use any content for commercial purposes without prior written consent.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">6. Online Classes</h2>
              <p>For online classes, students must have a stable internet connection and a suitable device. We are not responsible for disruptions caused by technical issues on the student's end. Classes missed due to student absence are generally not rescheduled unless communicated with advance notice.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">7. Limitation of Liability</h2>
              <p>Maths with Shraddha is not liable for any indirect or consequential losses arising from the use of our services. Our liability is limited to the fees paid for the relevant period of service.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">8. Changes to Terms</h2>
              <p>We reserve the right to modify these Terms of Service at any time. Updated terms will be posted on this page. Continued use of our services after changes constitutes your acceptance of the new terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">9. Governing Law</h2>
              <p>These Terms of Service are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">10. Contact</h2>
              <p>For questions about these terms, contact us at:</p>
              <div className="mt-3 space-y-1">
                <p><span className="font-semibold">Email:</span> <a href="mailto:hello@mathswithshraddha.com" className="text-accent hover:underline">hello@mathswithshraddha.com</a></p>
                <p><span className="font-semibold">Phone:</span> <a href="tel:+919969174811" className="text-accent hover:underline">+91 99691 74811</a></p>
              </div>
            </section>
          </div>

          <div className="mt-8 text-center">
            <Link href="/" className="text-accent hover:underline text-sm">← Back to Home</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
