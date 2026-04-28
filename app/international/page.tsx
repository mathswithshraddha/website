import Navbar from "@/components/Navbar";
import { Globe, Clock, MonitorPlay, Users } from "lucide-react";

export const metadata = {
  title: "International Batches | Maths with Shraddha",
  description: "Specialized online math coaching batches tailored for the timezones of students in the USA and Belgium.",
};

export default function InternationalStudents() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6">
            <Globe className="w-4 h-4 mr-2" /> Global Batches Now Open
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-6 leading-tight max-w-4xl mx-auto">
            Premium Online Math Coaching for Students in <span className="text-accent">USA & Belgium</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
            We conduct dedicated, live online batches tailored to your timezone. Experience high-quality, concept-driven mathematics learning from the comfort of your home.
          </p>
          <a href="https://wa.me/919969174811?text=Hi%20Shraddha%20Ma'am%2C%20I'm%20reaching%20out%20from%20overseas%20and%20am%20interested%20in%20a%20free%20trial." target="_blank" rel="noopener noreferrer" className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl">
            Enquire for International Batches
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">Timezone Aligned</h3>
              <p className="text-gray-600">
                Our classes are scheduled specifically to match the convenient after-school hours for students living in the United States and Belgium. No more waking up at odd hours.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6">
                <MonitorPlay className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">Interactive Live Sessions</h3>
              <p className="text-gray-600">
                100% live, interactive online classes via Zoom/Meet. We don't use pre-recorded videos. Your child gets real-time attention, doubt-solving, and guidance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">Small Focus Groups</h3>
              <p className="text-gray-600">
                We strictly limit our international batches to small groups. This ensures every student receives personalized attention and learns at a comfortable, tailored pace.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
