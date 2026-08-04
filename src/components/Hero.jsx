import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../sanityClient";

export default function Hero() {
  const [slides, setSlides] = useState([]);
  const [active, setActive] = useState(0);

  // ✅ Fetch blogs from Sanity
  useEffect(() => {
    client
      .fetch(`*[_type == "post"] | order(publishedAt desc)[0...5]{
        _id,
        title,
        slug,
        publishedAt,
        mainImage{
          asset->{url}
        }
      }`)
      .then((data) => {
        setSlides(data);
      })
      .catch(console.error);
  }, []);

  // ✅ Auto slide
  useEffect(() => {
    if (slides.length === 0) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 m-16">
        
        {/* LEFT TEXT */}
        <div className="max-w-xl text-white">
          <h1 className="text-[56px] leading-[1.1] font-bold drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
  We <span className="text-[#FB1C24]">Move</span> <br />
  What <span className="text-[#FB1C24]">Matters.</span>
</h1>

          <p className="mt-5 max-w-md text-base text-gray-200">
            As one of the established shipping companies in UAE, OSS moves cargo at scale, on schedule, with full shipment visibility from origin to delivery.

          </p>

          <Link to="/contact-us">
            <button className="mt-8 rounded-md border border-white px-7 py-3 text-sm transition hover:bg-white hover:text-black">
              Let’s Move Together →
            </button>
          </Link>
        </div>

        {/* RIGHT SLIDER */}
        {slides.length > 0 && (
          <div className="relative ml-auto hidden lg:flex items-center mt-16">

            {/* LEFT ARROW */}
            <button
              onClick={() =>
                setActive((active - 1 + slides.length) % slides.length)
              }
              className="absolute -left-14 top-1/2 -translate-y-1/2 text-white text-4xl opacity-80 hover:opacity-100"
            >
              ‹
            </button>

            {/* CARD */}
            <div className="relative w-[380px] rounded-[28px] bg-white p-5 shadow-2xl">
              
              {/* IMAGE + LINK */}
              <Link to={`/blogs/${slides[active]?.slug?.current}`}>
                <img
                  src={
                    slides[active]?.mainImage?.asset?.url ||
                    "/images/default.jpg"
                  }
                  alt={slides[active]?.title}
                  className="h-[200px] w-full rounded-[22px] object-cover"
                />
              </Link>

              {/* TITLE */}
              <p className="mt-4 text-sm font-medium text-gray-800">
                {slides[active]?.title?.slice(0, 80)}...
              </p>

              {/* PROGRESS */}
              <div className="mt-4 flex gap-2">
                {slides.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 w-8 rounded-full ${
                      i === active ? "bg-red-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* RED ARROW BUTTON */}
              <Link
                to={`/blogs/${slides[active]?.slug?.current}`}
                className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600"
              >
                ↗
              </Link>
            </div>

            {/* RIGHT ARROW */}
            <button
              onClick={() =>
                setActive((active + 1) % slides.length)
              }
              className="absolute -right-14 top-1/2 -translate-y-1/2 text-white text-4xl opacity-80 hover:opacity-100"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
}