import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";

//import { blogs } from "../../data/blogs";
import { useEffect } from "react";
import { client } from "../../sanityClient";
import Hero from "../../components/Hero";
import { Link } from "react-router-dom";
import useMeta from "../../hooks/useMeta";
import { useNavigate } from "react-router-dom";




const projects = [
  {
    title: "Rig Moment Storage",
    subtitle: " sss",
    image: "/images/project-1.jpg",
    slug: "weatherford-drilling-International",
  },
  
];


const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer secure open yard storage solutions for businesses that need outdoor space for equipment, vehicles, containers, machinery, and bulk materials.",
  },
  {
    question: "How do I book a shipment?",
    answer:
      "You can book a shipment by contacting our support team or by submitting a booking request through our website.",
  },
  {
    question: "What types of goods do you handle?",
    answer:
      "We handle a wide range of goods including industrial equipment, oil & gas materials, construction machinery, containers, and bulk cargo.",
  },
];

export default function Page() {

useEffect(() => {
  client
    .fetch(`*[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      slug,
      publishedAt,
      mainImage{
        asset->{
          url
        }
      }
    }`)
    .then((data) => setBlogs(data))
    .catch(console.error);
}, []);

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");

  const [activeIndex, setActiveIndex] = useState(0);

  useMeta(
    "Global Logistics & Warehousing Solutions UAE | OSS",
    "OSS delivers scalable logistics solutions including freight, warehousing, transport, and yard storage across UAE with speed, precision, and reliability."
  );

  const [blogs, setBlogs] = useState([]);

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });

    const data = await res.json();

    if (data.success) {
      navigate("/thank-you"); // ✅ same redirect
    } else {
      alert("Failed to send");
    }
  } catch (error) {
    console.log(error);
    alert("Error sending message");
  }
};

const services = [
    {
      title: "Ship Freight",
      image: "/images/ship-s1.png",
      link: "/services/freight-shipping-service",
    },
    {
      title: "Air Freight",
      image: "/images/Air-s1.png",
      link: "/service/international-shipping-air",
    },
    {
      title: "Land Transport",
      image: "/images/land-transport.png",
      link: "/services/freight-logistics-trucking",
    },
    {
      title: "Open Yard Storage",
      image: "/images/Open-yard-storage-s6.png",
      link: "/services/logistics-transport-sharjah",
    },
    {
      title: "Customs Clearance",
      image: "/images/Customer-clearance-s3.png",
      link: "/services/break-bulk-cargo-clearance",
    },
    {
      title: "Warehousing",
      image: "/images/warehousing-s7.png",
      link: "/service/warehouse-storage-space-for-rent",
    },
    {
      title: "Cross Stuffing & Port Handling Services",
      image: "/images/container-cross-stuffing-s4.png",
      link: "/services/container-cross-stuffing",
    },
    {
      title: "Container Certification & ISO Tank Decanting",
      image: "/images/container-certification-ISO-tank-s5.png",
      link: "/service/container-logistics-transport-sharjah",
    },
    {
      title: "Retail Partnership & e-Retailing Solutions",
      image: "/images/retail.jpg",
      link: "/services/inventory-management-solutions",
    },
  ];


  return (
    <main>
       <Hero />
      {/* WE PROVIDE LOGISTICS SOLUTIONS */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 px-10 lg:grid-cols-2">
          <div className="relative">
            <img
              src="/images/warehouse.png"
              alt="Warehouse"
              className="w-full rounded-lg object-cover"
            />

            <div className="absolute bottom-0 right-[-20px] bg-red-600 px-10 py-10 text-white shadow-lg">
              <p className="text-xs uppercase tracking-widest">
                Established since
              </p>
              <p className="mt-2 text-4xl font-bold">2006</p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4">
              <p className="text-xs uppercase tracking-widest text-gray-400">
                What we do
              </p>
              <span className="h-px w-12 bg-gray-300"></span>
            </div>

            <h2 className="mt-3 text-5xl font-bold text-gray-900">
              We Provide <br />
              <span className="text-red-600">Logistics Solutions</span>
            </h2>

            <p className="mt-6 max-w-lg text-gray-600">
              At OSS, we are striving to redefine storage as a service by
              delivering a complete logistics solution to our customers.
            </p>

            <div className="mt-8 flex items-center gap-6">
              <div className="text-3xl font-bold text-gray-900">
                260000<span className="text-red-600">+</span>
              </div>
              <span className="h-12 w-[2px] bg-gray-300"></span>
              <p className="text-sm text-gray-500">
                Sq Feet Capacity <br /> Facility in UAE
              </p>
            </div>

            <div className="mt-12 flex gap-6">
              <Link to="/about/vision-mission">
              <button className="rounded-md border px-10 py-4">
                A Little About Us
              </button>
            </Link>

            <Link to="/contact-us">
              <button onClick={() => navigate("/contact-us")} className="rounded-md bg-red-600 px-10 py-4 text-white">
                Connect With Us
              </button>
            </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      {/* OUR SERVICES */}
 <section className="py-24 text-center bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_55%,#FFC5C5_100%)]">
      <div className="mx-auto max-w-[1400px] px-10">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4">
          <span className="w-24 h-px bg-gray-300"></span>
          <p className="text-xs uppercase tracking-widest text-gray-400">
            Our Services
          </p>
          <span className="w-24 h-px bg-gray-300"></span>
        </div>

        {/* Title */}
        <h2 className="mt-4 text-4xl font-bold text-gray-800">
          Enhancing Your Productivity, <br />
          <span className="text-red-600">Increasing Your Efficiency</span>
        </h2>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8 justify-items-center">

          {services.map((service, index) => (
            <Link to={service.link} key={index}>
              <div className="group relative w-[180px] h-[180px] sm:w-[170px] sm:h-[170px] md:w-[220px] md:h-[220px] lg:w-[250px] lg:h-[250px] rounded-full overflow-hidden cursor-pointer transition hover:scale-105">
                
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white px-4">
                  <span className="text-center leading-snug text-sm md:text-base font-medium">
                    {service.title}
                  </span>
                  <FiArrowRight className="mt-2 text-lg" />
                </div>

              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>


       <section className="bg-white py-24">
      <div className="mx-auto max-w-[1400px] px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-16 h-px bg-gray-300"></span>
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Project Gallery
            </p>
            <span className="w-16 h-px bg-gray-300"></span>
          </div>

          <h2 className="text-4xl font-bold">
            <span className="text-red-600">Our Featured</span>{" "}
            <span className="text-gray-800">Projects</span>
          </h2>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={3}
          navigation={{
            nextEl: ".project-next",
            prevEl: ".project-prev",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[420px] rounded-xl overflow-hidden group">

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition"></div>

                {/* Text */}
                <div className="absolute bottom-6 left-6 text-white z-10">
                  <p className="font-semibold text-lg">{item.title}</p>
                  {item.subtitle && (
                    <p className="text-sm opacity-90">{item.subtitle}</p>
                  )}
                </div>

                {/* Arrow */}
                <Link
                to={`/projects/${item.slug}`}
                className="absolute bottom-6 right-6 w-10 h-10 bg-red-600
                          rounded-full flex items-center justify-center
                          text-white z-10
                          hover:bg-red-700 transition"
              >
                <FiArrowUpRight />
              </Link>


              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Controls */}
        <div className="flex items-center justify-between mt-12">

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              className="project-prev w-12 h-12 rounded-full
                         bg-red-100 text-red-600
                         flex items-center justify-center
                         hover:bg-red-600 hover:text-white transition"
            >
              ←
            </button>

            <button
              className="project-next w-12 h-12 rounded-full
                         bg-red-100 text-red-600
                         flex items-center justify-center
                         hover:bg-red-600 hover:text-white transition"
            >
              →
            </button>
          </div>

          {/* CTA 
          <a
            href="/projects"
            className="border border-red-600 text-red-600
                       px-6 py-2 rounded-full text-sm
                       hover:bg-red-600 hover:text-white transition"
          >
            Learn More
          </a>*/}
        </div>

      </div>
    </section>

      <section className="bg-white py-2">
  <div className="mx-auto max-w-[1200px] px-6">

    {/* Heading */}
    <div className="text-center mb-20">
      <div className="flex items-center justify-center gap-4 mb-4">
        <span className="w-20 h-px bg-gray-300"></span>
        <p className="text-xs uppercase tracking-widest text-gray-400">
          Why Choose Us
        </p>
        <span className="w-20 h-px bg-gray-300"></span>
      </div>

      <h2 className="text-4xl font-bold text-gray-800">
        Built on Excellence, <br />
        <span className="text-red-600">Delivered with Precision.</span>
      </h2>
    </div>

    {/* Features */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">

      {/* Support */}
      <div>
        <img
          src="/icons/call.png"   // or png
          alt="24/7 Support"
          className="w-12 h-12 mx-auto mb-6"
        />
        <h4 className="font-semibold text-gray-800 mb-3">
          24/7 SUPPORT
        </h4>
        <p className="text-sm text-gray-500 leading-relaxed">
          We are available to support our clients <br />
          24/7, 365 days. Call us anytime <br />
          <a
                href="tel:+971509322335"
                className="text-gray-500 hover:text-red-600"
              >+971 50 9322 335</a>
        </p>
      </div>

      {/* Quality */}
      <div>
        <img
          src="/icons/hand.png"
          alt="Quality Assurance"
          className="w-12 h-12 mx-auto mb-6"
        />
        <h4 className="font-semibold text-gray-800 mb-3">
          QUALITY ASSURANCE
        </h4>
        <p className="text-sm text-gray-500 leading-relaxed">
          We ensure that utmost quality is <br />
          maintained in all our operations and <br />
          adhere to quality processes.
        </p>
      </div>

      {/* Location */}
      <div>
        <img
          src="/icons/map.png"
          alt="Strategically Located"
          className="w-12 h-12 mx-auto mb-6"
        />
        <h4 className="font-semibold text-gray-800 mb-3">
          STRATEGICALLY LOCATED
        </h4>
        <p className="text-sm text-gray-500 leading-relaxed">
          We are strategically located at one of <br />
          the most geographically convenient <br />
          locations.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* BLOGS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1400px] px-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="w-24 h-px bg-gray-300"></span>
              <p className="text-xs uppercase tracking-widest text-gray-400">
                Our Blogs
              </p>
              <span className="w-24 h-px bg-gray-300"></span>
            </div>

            <h2 className="text-4xl font-bold">
              Logistics News,<br />
              <span className="text-red-600">Trends & Expertise</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.slice(0, 3).map((blog) => {
  const date = new Date(blog.publishedAt);

  return (
    <a
      key={blog._id}
      href={`/blogs/${blog.slug?.current}`}
      className="group"
    >
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={blog.mainImage?.asset?.url}
          alt={blog.title}
          className="h-[260px] w-full object-cover group-hover:scale-105 transition"
        />

        <div className="absolute bottom-3 right-3 bg-white rounded-lg px-3 py-1 shadow">
          <p className="text-sm font-semibold">
            {date.getDate()}
          </p>
          <p className="text-[10px] text-gray-400 uppercase">
            {date.toLocaleString("en-US", { month: "short" })}
          </p>
        </div>
      </div>

      <h3 className="mt-4 font-medium text-gray-700">
        {blog.title}
      </h3>
    </a>
  );
})}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-[900px] px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="w-24 h-px bg-gray-300"></span>
              <p className="text-xs uppercase tracking-widest text-gray-400">
                FAQs
              </p>
              <span className="w-24 h-px bg-gray-300"></span>
            </div>

            <h2 className="text-4xl font-bold">
              Everything You <br />
              <span className="text-red-600">Need to Know</span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((item, index) => (
              <div key={index} className="border-b pb-6">
                <button
                  onClick={() =>
                    setActiveIndex(index === activeIndex ? null : index)
                  }
                  className="flex w-full justify-between text-left"
                >
                  <span className="font-medium text-gray-700">
                    {item.question}
                  </span>
                  <span className="text-gray-400">
                    {activeIndex === index ? "▲" : "▼"}
                  </span>
                </button>

                {activeIndex === index && (
                  <p className="mt-4 text-sm text-gray-500">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
             <Link to="about/inspiration">
            <button className="border border-red-600 px-6 py-2 text-red-600 rounded-md hover:bg-red-600 hover:text-white">
              Read More
            </button>
             </Link>
          </div>
        </div>
      </section>
      <section className="bg-white py-10">
      <div className="mx-auto max-w-[1400px] px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

          {/* LEFT: MAP */}
          <div className="w-full h-[450px] rounded-lg overflow-hidden">
           <div className="w-full h-[520px] rounded-md overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57644.219902197685!2d55.553548!3d25.446161!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f9dca6b63c8b%3A0x8c8e7c80f486f275!2sOSS%20FZC%20-%20Logistics!5e0!3m2!1sen!2sin!4v1770355968475!5m2!1sen!2sin"
    className="w-full h-full border-0"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="OSS Location Map"
  ></iframe>
</div>

          </div>

          {/* RIGHT: CONTACT FORM */}
          <div>

            {/* Heading */}
            <div className="mb-10">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-16 h-px bg-gray-300"></span>
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  Contact Us
                </p>
                 <span className="w-16 h-px bg-gray-300"></span>
              </div>

              <h2 className="text-4xl font-bold text-gray-800">
                Have Questions?<br />
                <span className="text-red-600">Get in Touch!</span>
              </h2>
            </div>

            {/* Form */}
            <form className="space-y-8" onSubmit={handleSubmit}>

              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <input
  type="text"
  placeholder="Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full border-b border-gray-300 focus:border-red-600 outline-none pb-2" required
/>

                <input
  type="text"
  placeholder="Number"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  className="w-full border-b border-gray-300 focus:border-red-600 outline-none pb-2" required
/>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <input
  type="email"
  placeholder="E-mail"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full border-b border-gray-300 focus:border-red-600 outline-none pb-2" required
/>
                <input
  type="text"
  placeholder="Company"
  className="w-full border-b border-gray-300 focus:border-red-600 outline-none pb-2"
/>
              </div>

              {/* Message */}
              <textarea
  rows="3"
  placeholder="Message"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  className="w-full border-b border-gray-300 focus:border-red-600 outline-none pb-2 resize-none"
/>

              {/* Button */}
              <button
                type="submit"
                className="mt-6 bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
    <section className="bg-white py-24">
  <div className="mx-auto max-w-[1400px] px-10">

    <div
      className="relative h-[300px] rounded-xl overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/Explore-More.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Grow With the Flow
        </h2>

        <button  onClick={() => navigate("/contact-us")} className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition">
          Connect With Us
          <span>→</span>
        </button>
      </div>
    </div>

  </div>
</section>


    </main>
  );
}
