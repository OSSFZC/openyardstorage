export default function ServiceGridSection({
  eyebrow,
  title,
  services = [],
  columns = 3,
}) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Eyebrow */}
        {eyebrow && (
          <span className="text-sm text-gray-500 tracking-wide uppercase">
            {eyebrow}
          </span>
        )}

        {/* Title */}
        <h3 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-2 mb-12">
          {title}
        </h3>

        {/* Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[calc(50%-2rem)] md:w-[calc(33.333%-2rem)] relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-500"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Initial Bottom Gradient */}
              <div
                className="absolute bottom-0 left-0 w-full 
                              bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                              p-6 transition duration-500 group-hover:opacity-0"
              >
                <h4 className="text-white text-xl font-semibold text-left">
                  {item.title}
                </h4>
              </div>

              {/* Hover Overlay */}
              <div
                className="absolute inset-0 bg-black/80 
                              flex flex-col items-center justify-center text-center
                              opacity-0 group-hover:opacity-100
                              transition duration-500 p-6"
              >
                <h4 className="text-white text-2xl font-semibold mb-3 transform translate-y-4 group-hover:translate-y-0 transition duration-500">
                  {item.title}
                </h4>

                {item.description && (
                  <p className="text-white text-sm mb-4 opacity-90">
                    {item.description}
                  </p>
                )}

                {item.buttonText && (
                  <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
                    {item.buttonText}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
