export default function GallerySection() {
  // Generate the array of 30 image paths based on the file naming convention
  const images = Array.from({ length: 30 }, (_, i) => 
    `/Maths with Shraddha Students Gallery ${i + 1}. .jpg`
  );

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-6">
            Student Success Gallery
          </h2>
          <p className="text-gray-600 text-lg">
            Glimpses of our students engaging with mathematics, building confidence, and achieving excellence.
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((src, index) => (
            <div key={index} className="break-inside-avoid relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow group border border-gray-100 bg-gray-50">
              <img 
                src={encodeURI(src)} 
                alt={`Maths with Shraddha Student ${index + 1}`} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
