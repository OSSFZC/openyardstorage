import { useEffect, useRef, useState } from "react";

function Counter({ value, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    let observer;

    const startCounter = () => {
      let start = 0;
      const end = parseInt(value.replace(/\D/g, ""));
      const suffix = value.replace(/[0-9]/g, "");

      const increment = Math.ceil(end / (duration / 16));

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end + suffix);
          clearInterval(timer);
        } else {
          setCount(start + suffix);
        }
      }, 16);
    };

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounter();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);

    return () => observer && observer.disconnect();
  }, [value, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-black">
      {count}
    </div>
  );
}

export default function StatsSection({ title, subtitle, stats = [] }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          {title}
        </h2>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-gray-500 mt-2">
            {subtitle}
          </p>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-12">
          {stats.map((item, index) => (
            <div key={index}>
              <Counter value={item.value} />
              <p className="text-gray-500 mt-2 text-sm md:text-base">
                {item.label}
              </p>
<<<<<<< HEAD
=======
              <p>
                {item.description}
              </p>
>>>>>>> 326c163 (Initial commit)
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
