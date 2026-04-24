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
          </div>

          <div>
            <h4 className="text-lg font-bold text-primary mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="#about" className="text-gray-600 hover:text-accent transition-colors">About Mrs. Shraddha</Link></li>
              <li><Link href="#courses" className="text-gray-600 hover:text-accent transition-colors">Our Programs</Link></li>
              <li><Link href="#testimonials" className="text-gray-600 hover:text-accent transition-colors">Testimonials</Link></li>
              <li><Link href="#free-trial" className="text-gray-600 hover:text-accent transition-colors">Book Free Trial</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-primary mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-600">
                <Phone className="w-5 h-5 text-accent mr-3 mt-0.5 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start text-gray-600">
                <Mail className="w-5 h-5 text-accent mr-3 mt-0.5 shrink-0" />
                <span>hello@mathswithshraddha.com</span>
              </li>
              <li className="flex items-start text-gray-600">
                <MapPin className="w-5 h-5 text-accent mr-3 mt-0.5 shrink-0" />
                <span>Kanjurmarg East, Mumbai</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Maths with Shraddha. All rights reserved.
          </p>
          <div className="text-gray-500 text-sm">
            Building Mathematical Thinkers
          </div>
        </div>
      </div>
    </footer>
  );
}
