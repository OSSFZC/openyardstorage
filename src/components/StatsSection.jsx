import { useEffect, useRef, useState } from "react";

function Counter({
  value,
  suffix = "",
  unit = "",
  decimals = 0,
  duration = 2000,
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const startCounter = () => {
      let start = 0;
      const end = Number(value);
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;

        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounter();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-black">
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}

      {unit && (
        <span className="ml-1 text-base md:text-lg font-semibold align-middle">
          {unit}
        </span>
      )}
    </div>
  );
}

export default function StatsSection({ title, subtitle, stats = [] }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h4 className="text-3xl md:text-4xl font-semibold text-gray-800">
          {title}
        </h4>

        {subtitle && <p className="text-gray-500 mt-2">{subtitle}</p>}

        <div className="flex flex-wrap justify-center gap-10 mt-12">
          {stats.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-[calc(50%-2.5rem)] lg:w-[calc(25%-2.5rem)]"
            >
              <Counter
                value={item.value}
                suffix={item.suffix}
                unit={item.unit}
                decimals={item.decimals ?? 0}
              />

              <p className="text-gray-500 mt-2 text-sm md:text-base font-medium">
                {item.label}
              </p>

              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
