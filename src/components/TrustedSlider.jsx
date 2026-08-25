import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  "/logos/amazon.png",
  "/logos/Google.png",
  "/logos/instagram.png",
  "/logos/linkedin.png",
  "/logos/metallb.png",
  "/logos/microsoft.png",
  "/logos/pay.png",
];

export default function TrustedSlider({
  title = "Trusted by Leaders Across Industries",
  description,
}) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-6xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl lg:whitespace-nowrap">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-500">
              {description}
            </p>
          )}
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={40}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          className="!ease-linear"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-20">
                <img
                  src={logo}
                  alt="brand logo"
                  className="h-10 object-contain opacity-80 hover:opacity-100 transition"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
