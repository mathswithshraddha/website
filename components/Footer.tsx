import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/MWS_NOBG.png"
                alt="Maths with Shraddha"
                width={180}
                height={60}
                className="object-contain h-20 w-auto"
              />
            </Link>
            <p className="text-gray-600 mb-6 max-w-sm leading-relaxed">
              Premium concept-based mathematics coaching for Grades 1-10, dedicated to building real problem-solving ability and Olympiad success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm hover:bg-accent hover:text-white transition-colors border border-gray-100">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm hover:bg-accent hover:text-white transition-colors border border-gray-100">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm hover:bg-accent hover:text-white transition-colors border border-gray-100">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-primary mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-600 hover:text-accent transition-colors">Our Story</Link></li>
              <li><Link href="/courses" className="text-gray-600 hover:text-accent transition-colors">Our Programs</Link></li>
              <li><Link href="/testimonials" className="text-gray-600 hover:text-accent transition-colors">Testimonials</Link></li>
              <li><Link href="/enquire" className="text-gray-600 hover:text-accent transition-colors">Book Free Trial</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-primary mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-600">
                <Phone className="w-5 h-5 text-accent mr-3 mt-0.5 shrink-0" />
                <a href="tel:+919969174811" className="hover:text-accent transition-colors">+91 99691 74811</a>
              </li>
              <li className="flex items-start text-gray-600">
                <Mail className="w-5 h-5 text-accent mr-3 mt-0.5 shrink-0" />
                <a href="mailto:hello@mathswithshraddha.com" className="hover:text-accent transition-colors">hello@mathswithshraddha.com</a>
              </li>
              <li className="flex items-start text-gray-600">
                <MapPin className="w-5 h-5 text-accent mr-3 mt-0.5 shrink-0" />
                <span>Kanjurmarg East, Mumbai</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Maths with Shraddha. All rights reserved.
          </p>
          <div className="flex space-x-4 text-gray-500">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
