import Navbar from "@/components/Navbar";
import { Globe, Clock, MonitorPlay, Users } from "lucide-react";

export const metadata = {
  title: "International Batches | Maths with Shraddha",
  description: "Specialized online math coaching batches tailored for the timezones of students in the USA and Belgium.",
};

export default function InternationalStudents() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden bg-primary text-white relative shadow-2xl py-20 px-4">
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
          
          <div className="relative z-10 text-center flex flex-col items-center">
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-bold mb-8 shadow-lg">
              <Globe className="w-5 h-5 mr-2" /> Global Batches Now Open
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-8 leading-tight max-w-4xl mx-auto">
              Premium Online Math Coaching for Students in <span className="text-accent">USA & Belgium</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
              We conduct dedicated, live online batches tailored to your timezone. Experience high-quality, concept-driven mathematics learning from the comfort of your home.
            </p>
            <a href="https://wa.me/919969174811?text=Hi%20Shraddha%20Ma'am%2C%20I'm%20reaching%20out%20from%20overseas%20and%20am%20interested%20in%20a%20free%20trial." target="_blank" rel="noopener noreferrer" className="inline-block bg-accent text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all">
              Enquire for International Batches
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 pb-32 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[2rem] border-4 border-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 font-heading">Timezone Aligned</h3>
              <p className="text-gray-700 font-medium leading-relaxed">
                Our classes are scheduled specifically to match the convenient after-school hours for students living in the United States and Belgium. No more waking up at odd hours.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] border-4 border-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-green/20 text-green rounded-full flex items-center justify-center mb-6 shadow-sm">
                <MonitorPlay className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 font-heading">Interactive Live Sessions</h3>
              <p className="text-gray-700 font-medium leading-relaxed">
                100% live, interactive online classes via Zoom/Meet. We don't use pre-recorded videos. Your child gets real-time attention, doubt-solving, and guidance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border-4 border-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-orange/20 text-orange rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 font-heading">Small Focus Groups</h3>
              <p className="text-gray-700 font-medium leading-relaxed">
                We strictly limit our international batches to small groups. This ensures every student receives personalized attention and learns at a comfortable, tailored pace.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
