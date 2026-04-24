import EnquiryForm from "./EnquiryForm";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Enquire About Mathematics Classes | Maths with Shraddha",
  description: "Get personalized guidance and find the right mathematics program for your child. 2000+ students taught, 80%+ Olympiad success rate.",
};

export default function EnquirePage() {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 math-pattern pointer-events-none opacity-[0.03]"></div>
      
      <Navbar />
      
      <main className="pt-32 pb-24 px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 mb-6 bg-accent/10 border border-accent/20 rounded-full">
              <span className="text-accent text-sm font-bold tracking-wider uppercase">Admission Enquiry 2024-25</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary mb-6 tracking-tight">
              Invest in Your Child's <span className="text-accent">Mathematical Future</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Complete the steps below to help us understand your child's needs. Shraddha will provide personalized guidance for the perfect learning path.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              {[
                { label: "2000+ Students Taught", icon: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" },
                { label: "80%+ Olympiad Success", icon: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" },
                { label: "Certified Educator", icon: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-gray-100">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d={item.icon} />
                  </svg>
                  <span className="text-sm font-bold text-primary/80">{item.label}</span>
                </div>
              ))}
            </div>
          </header>
          
          <EnquiryForm />
          
          <footer className="mt-16 pt-16 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Have questions before enrolling?</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We're here to help you make the best decision for your child's education. Chat with us for a quick consultation or to know more about our batch timings.
                </p>
                <a 
                  href="https://wa.me/919876543210"
                  className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebd5c] text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.672 1.433 5.657 1.434h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Chat with Us
                </a>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-primary">Secure & Private</p>
                      <p className="text-sm text-gray-500">Your information is strictly for enrollment.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/5 rounded-full flex items-center justify-center text-accent">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-primary">Fast Response</p>
                      <p className="text-sm text-gray-500">We typically reply within 24 hours.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}