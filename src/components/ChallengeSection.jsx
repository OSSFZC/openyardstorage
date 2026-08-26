export default function ChallengeSection({
  title,
  subtitle,
  description,
  description2,
  rightTitle,
  rightBg = "#EEE6FF",
  cards = [],
}) {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-semibold text-black leading-tight">
            {title}
          </h2>

          <p className="mt-4 text-red-500 font-medium">
            {subtitle}
          </p>

          <p className="mt-6 text-gray-600 leading-relaxed">
            {description}
          </p>

          {description2 && (
            <p className="mt-4 text-gray-600 leading-relaxed">
              {description2}
            </p>
          )}
        </div>

        {/* RIGHT CONTENT */}
        <div
          className="rounded-2xl p-8"
          style={{ backgroundColor: rightBg }}
        >
          <p className="text-base font-semibold text-gray-800 mb-6 text-center">
          {rightTitle}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <FeatureCard key={index} {...card} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* CARD */
function FeatureCard({ icon: Icon, title, text }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">

      <div className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-100 text-xl text-black">
        <Icon />
      </div>

      <p className="mt-4 text-lg font-semibold text-black">
        {title}
      </p>

      <p className="mt-2 text-gray-600 text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
}
