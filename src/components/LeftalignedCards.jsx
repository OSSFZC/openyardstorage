export default function LeftalignedCards({
  eyebrow,
  title,
  subtitle,
  description,
  features = [],
  bgColor = "#ffffff",
}) {
  return (
    <section className="py-20" style={{ backgroundColor: bgColor }}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          {eyebrow && (
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="w-10 h-px bg-gray-300"></span>

              <span className="text-sm uppercase tracking-wider text-gray-500">
                {eyebrow}
              </span>

              <span className="w-10 h-px bg-gray-300"></span>
            </div>
          )}

          <p className="text-3xl md:text-4xl font-semibold text-gray-900">
            {title}
          </p>

          <p className="mt-5 text-gray-600 leading-8">{subtitle}</p>

          <p className="mt-5 text-gray-900 leading-7">{description}</p>
        </div>

        {/* Feature Cards */}

        <div className="flex flex-wrap justify-center gap-8 mt-16">
          {features.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-[calc(50%-1rem)] flex items-start gap-5 rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Icon */}

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#F8F6F1]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Content */}

              <div>
                <p className="text-xl font-semibold text-gray-900">
                  {item.title}
                </p>

                <p className="mt-2 text-gray-600 leading-7">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
