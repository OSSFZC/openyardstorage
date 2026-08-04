export default function CardsFeatures({
  eyebrow,
  title,
  description,
  features = [],
  bgColor = "#f8f9fa",
}) {
  return (
    <section
      className="py-20"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">

          {eyebrow && (
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="w-12 h-px bg-gray-300"></span>
              <p className="text-sm uppercase tracking-wider text-gray-500">
                {eyebrow}
              </p>
              <span className="w-12 h-px bg-gray-300"></span>
            </div>
          )}

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {title}
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            {description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl bg-white border border-gray-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#C59D5F]"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-[#F5F2EA] flex items-center justify-center group-hover:bg-[#C59D5F] transition-colors duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-600 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}