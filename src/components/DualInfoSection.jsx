export default function DualInfoSection({ items = [] }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-red-300 rounded-md p-10 text-center"
            >
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                {item.title}
              </h4>

              <h4 className="text-xl font-medium text-gray-700 mb-4">
                {item.subtitle}
              </h4>

              <div className="text-gray-600 leading-relaxed">
                {item.description.split("\n\n").map((paragraph, i) => (
                  <p key={i} className={i > 0 ? "mt-4" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}