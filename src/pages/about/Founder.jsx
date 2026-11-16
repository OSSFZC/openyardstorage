import React from "react";
import useMeta from "../../hooks/useMeta";
import { pageMeta } from "../../data/pageMeta";
import { Link } from "react-router-dom";


const Founder = () => {
   useMeta(pageMeta["/about/founder"].title, pageMeta["/about/founder"].description);
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative w-full h-[90vh]">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/founder-bg.jpg')", // replace image
          }}
        ></div>

        

        {/* Content */}
        <div className="pt-36 relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center ">
          <div className="max-w-2xl text-white ">

            {/* Small heading */}
            <p className="text-sm tracking-widest text-gray-300 uppercase mb-4">
              Message From Leaders
            </p>

            {/* Main heading */}
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            <span className="block mb-4">
                Leading with a Promise:
            </span>

            <span className="block text-red-500">
                Your Time is Our Priority
            </span>
            </h1>


            {/* Description */}
            <p className="mt-6 text-gray-200 leading-relaxed">
              Journey in the logistics and industrial support sector began in
              2006, but our philosophy was forged through experience.
            </p>

            {/* Quote */}
            <p className="mt-6 italic font-semibold text-white pl-6 border-l-4 border-red-600">
              “Value for Time is not just a motto; it’s our commitment<br></br> to you.”
            </p>

          </div>
        </div>

      </section>

    <section className="w-full bg-white py-24" style={{ backgroundColor: "#F8F9FB" }}>
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

    {/* LEFT – IMAGES (ONE COLUMN) */}
    <div className="grid grid-cols-2 gap-6 h-[520px]">

      {/* Big Image (Full Height) */}
      <div className="col-span-1 row-span-2 overflow-hidden rounded-md">
        <img
          src="/images/fimg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Top Small Image */}
      <div className="overflow-hidden rounded-md">
        <img
          src="/images/fimg2.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom Small Image */}
      <div className="overflow-hidden rounded-md">
        <img
          src="/images/f3.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

    </div>

    {/* RIGHT – CONTENT (ONE COLUMN, SAME WIDTH) */}
    <div className="h-[520px] flex flex-col justify-center">

      {/* Small heading */}
      <div className="flex items-center gap-4 mb-4">
        <span className="text-sm tracking-widest text-gray-400 uppercase">
          Our History
        </span>
        <span className="h-[1px] w-16 bg-gray-300"></span>
      </div>

      {/* Heading */}
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
        From Storage to <span className="text-red-600">Solutions</span>
      </h2>

      {/* Content */}
      <p className="text-gray-600 mt-6 leading-relaxed">
        We started OSS with a simple goal: to provide dependable open land
        storage for the oil and gas industry. While we were successful, we
        believed we could offer more.
      </p>

      <p className="text-gray-600 mt-4 leading-relaxed">
        We evolved from a simple storage provider into a strategic logistics
        partner, mastering freight, customs, and port operations — guided by
        one principle: <strong>Learning Every Day.</strong>
      </p>

      <p className="text-gray-600 mt-4 leading-relaxed">
        Through dedication and trust, we grew alongside our clients, delivering
        solutions beyond expectations.
      </p>

      {/* CTA */}
      <Link
          to="/contact-us"
          className="mt-8 w-fit bg-red-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-red-700 transition"
        >
          Connect With Us →
        </Link>
    </div>

  </div>
</section>

<section className="w-full py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Top label with lines */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <span className="h-[1px] w-12 bg-gray-300"></span>
          <span className="text-sm tracking-widest text-gray-400 uppercase">
            Our Core Belief
          </span>
          <span className="h-[1px] w-12 bg-gray-300"></span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-700 mb-8">
          It’s <span className="text-gray-800">"Our Project"</span>
        </h2>

        {/* Paragraphs */}
        <p className="text-gray-600 leading-relaxed mb-6">
          We've faced hurdles from customs delays to tight deadlines. These
          experiences taught us that the most dangerous word in business can be
          a careless “Yes.” That’s why at OSS, we prioritize truly understanding
          your scope before we commit. When we give you our word, you can be
          certain we have the team, the plan, and the dedication to deliver.
        </p>

        <p className="text-gray-600 leading-relaxed">
          This belief is the foundation of our culture. We have personally
          trained our team to operate with one mission: to protect your
          timeline as if it were our own. We don’t see your project as a task
          to complete; we see it as our shared project to achieve together.
        </p>

      </div>
    </section>

          <section className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT – IMAGE */}
        <div className="overflow-hidden rounded-md">
          <img
            src="/images/industrial-partner.jpg" // replace with your image
            alt="Industrial logistics"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT – CONTENT */}
        <div>
          {/* Small label */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm tracking-widest text-gray-400 uppercase">
              A Vision for the Future
            </span>
            <span className="h-[1px] w-16 bg-gray-300"></span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Your One-Stop
            <br />
            <span className="text-red-600">Industrial Partner</span>
          </h2>

          {/* Paragraphs */}
          <p className="text-gray-600 mt-6 leading-relaxed">
            Today, OSS has grown into a comprehensive partner. Beyond storage
            and door-to-door logistics, we now help clients procure parts,
            manage equipment sales, and connect with specialized service
            providers.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Our focus is on building this future, creating an ecosystem and
            eventually a marketplace where all your industrial requirements
            can be met efficiently and reliably.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Thank you for considering OSS. We look forward to the opportunity
            to partner with you and deliver the value and timeliness your
            business deserves.
          </p>
        </div>

      </div>
    </section>
    </div>
  );
};

export default Founder;
