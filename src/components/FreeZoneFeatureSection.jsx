export default function FreeZoneFeatureSection({
  eyebrow,
  title,
  subtitle,
  description,
  features = [],
  bgColor = "#f7f7f7",
}) {
  return (
    <section style={{ backgroundColor: bgColor }} className="py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Eyebrow */}
        {eyebrow && (
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 h-[1px] bg-gray-300" />
            <p className="text-sm text-gray-500 whitespace-nowrap">{eyebrow}</p>
            <span className="w-12 h-[1px] bg-gray-300" />
          </div>
        )}
        {/* Title */}
        <h4 className="text-3xl md:text-4xl font-semibold text-gray-800">
          {title}
        </h4>

        <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
          {subtitle}
        </p>

        {/* Divider */}
        <div className="flex justify-center gap-2 my-4">
          <span className="w-8 h-[2px] bg-gray-300" />
          <span className="w-8 h-[2px] bg-gray-300" />
        </div>

        {/* Description */}
        <p className="max-w-4xl mx-auto text-gray-900 text-sm md:text-base leading-relaxed">
          {description}
        </p>

        {/* Feature Items */}
        <div className="flex flex-wrap justify-center gap-10 mt-14">
          {features.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[calc(50%-2.5rem)] md:w-[calc(25%-2.5rem)] flex flex-col items-center text-center"
            >
              <div className="mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-14 h-14 object-contain mx-auto"
                />
              </div>

              <p className="font-semibold text-gray-800 mb-2">{item.title}</p>

              <p className="text-sm text-gray-600 max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
