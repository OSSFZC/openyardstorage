import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const GOOGLE_REVIEWS_URL =
  "https://maps.app.goo.gl/KTnwMEcjfrx98GJ3A";

// Top reviews from the OSS FZC - Logistics Google Business Profile.
const testimonials = [
  {
    name: "Ma. Ros Ann Estorco",
    review:
      "Very fast, realiable and supportive team. OSS services is well deserve to get a highest star. Thanks for give us the best and supportive services.",
  },
  {
    name: "Amar Mohamed",
    review:
      "I had an excellent experience with OSS FZC Logistics agency company! Their professional team ensured my shipments arrived on time and in perfect condition. Communication was top-notch, providing all updates throughout the process.",
  },
  {
    name: "Bernie Bruce",
    review:
      "We are extremely satisfied with the efficient service we received from OSS FZC team. Jaseel was very helpful and promptly helped us in renewing our import code. Overall, a highly satisfying experience that I would recommend to others.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-24 h-px bg-gray-300"></span>
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Testimonials
            </p>
            <span className="w-24 h-px bg-gray-300"></span>
          </div>

          <h3 className="text-4xl font-bold text-gray-800">
            What Our Clients <br />
            <span className="text-red-600">Say About Us</span>
          </h3>

          <div className="mt-5 flex items-center justify-center gap-2 text-sm text-gray-500">
            <FcGoogle className="text-lg" />
            <span className="font-semibold text-gray-800">5.0</span>
            <span className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </span>
            <span>on Google</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex flex-col rounded-xl border border-gray-100 p-8 shadow-sm transition hover:shadow-md"
            >
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="mt-5 flex-1 text-sm leading-relaxed text-gray-600">
                “{item.review}”
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 font-semibold text-red-600">
                  {item.name.charAt(0)}
                </span>
                <div>
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <p className="text-xs text-gray-400">Google Review</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-red-600 px-6 py-2 text-red-600 rounded-md hover:bg-red-600 hover:text-white transition"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
}
