export default function CTASection({
  title,
  buttonText,
  buttonLink,
  backgroundImage,
  description,
  overlay = true,
}) {
  return (
    <section
      className="relative py-24 bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black/50"></div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <h5 className="text-white text-3xl md:text-5xl font-semibold mb-8">
          {title}
        </h5>

        <p className="text-white text-lg mb-8">
          {description}
        </p>

        <a
          href={buttonLink}
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md font-medium transition"
        >
          {buttonText}
          <span className="text-xl">→</span>
        </a>
      </div>
    </section>
  );
}
