import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react";

export default function ExamsFooter() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/MWS_NOBG.png" 
                alt="Maths with Shraddha" 
                width={150} 
                height={50} 
                className="object-contain h-14 w-auto invert"
              />
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Helping students from Grades 1-10 master mathematics, excel in Olympiads, and develop lifelong problem-solving skills through personalized, concept-first teaching.
            </p>
            <div className="flex flex-col space-y-3">
              <a href="https://wa.me/919819123456" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5 text-accent" />
                <span>WhatsApp: +91 9819123456</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-accent" />
                <span>contact@mathswithshraddha.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Kanjurmarg, Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/exams" className="text-gray-300 hover:text-white transition-colors">All Exams</Link></li>
              <li><Link href="/exams/sasmo" className="text-gray-300 hover:text-white transition-colors">SASMO Preparation</Link></li>
              <li><Link href="/exams/sof" className="text-gray-300 hover:text-white transition-colors">SOF Olympiads</Link></li>
              <li><Link href="/exams/ipm" className="text-gray-300 hover:text-white transition-colors">IPM</Link></li>
              <li><Link href="/exams/mental-maths" className="text-gray-300 hover:text-white transition-colors">Mental Maths</Link></li>
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-5 h-5 text-accent" />
                <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
              </li>
              <li><a href="#free-trial" className="text-gray-300 hover:text-white transition-colors">Book Free Trial</a></li>
              <li><a href="https://wa.me/919819123456" className="text-gray-300 hover:text-white transition-colors">Chat on WhatsApp</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Maths with Shraddha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}