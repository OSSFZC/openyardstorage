export default function InnerHero({
  eyebrow, // 👈 NEW
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage,
  backgroundImageAlt,
}) {
  return (
    <section
      className="relative h-[100vh] bg-cover bg-center"
      style={
        backgroundImageAlt
          ? undefined
          : { backgroundImage: `url(${backgroundImage})` }
      }
    >
      {backgroundImageAlt && (
        <img
          src={backgroundImage.trim()}
          alt={backgroundImageAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {/* Optional overlay (keep very light or remove if not needed) */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div
        className="relative z-10 mx-auto max-w-[1400px] px-6 h-full
                   flex items-center pt-36"
      >
        <div className="text-white max-w-6xl">
          {/* EYEBROW TEXT */}
          {eyebrow && (
            <p className="mb-4 text-sm uppercase tracking-widest text-white/70">
              {eyebrow}
            </p>
          )}

          {/* MAIN TITLE */}
          <h1 className="text-5xl md:text-5xl font-bold leading-tight">
            {title}
          </h1>

          {/* SUBTITLE */}
          {subtitle && <p className="mt-6 text-white/80 text-lg">{subtitle}</p>}

          {/* BUTTON */}
          {buttonText && (
            <a
              href={buttonLink}
              className="inline-flex items-center gap-2 mt-8
                         border border-white px-6 py-3 rounded-md
                         hover:bg-white hover:text-black transition"
            >
              {buttonText}
              <span>→</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
