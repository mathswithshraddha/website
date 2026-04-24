import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "My son used to dread math, but Mrs. Shraddha completely changed his perspective. Her focus on concepts rather than rote learning made all the difference. He recently cleared the SASMO first round!",
      author: "Priya S.",
      role: "Parent of Grade 6 Student",
    },
    {
      text: "The personalized attention and the adaptive approach have worked wonders. I've seen a massive boost not just in my daughter's math scores, but in her overall logical thinking and confidence.",
      author: "Rajeev K.",
      role: "Parent of Grade 8 Student",
    },
    {
      text: "Shraddha Ma'am is exceptional. She doesn't just teach math; she teaches how to think. The Olympiad prep batch is rigorous yet highly engaging.",
      author: "Anita D.",
      role: "Parent of Grade 5 Student",
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-6">
            Trusted by Parents, Loved by Students
          </h2>
          <p className="text-gray-600 text-lg">
            Hear from the parents who have witnessed the transformation firsthand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-gray-200" />
              <div className="flex space-x-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-8 italic relative z-10">
                "{testimonial.text}"
              </p>
              <div className="mt-auto">
                <p className="font-bold text-primary">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
