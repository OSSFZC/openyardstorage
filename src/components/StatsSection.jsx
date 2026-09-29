import { useEffect, useRef, useState } from "react";

// Stats arrive either as numbers (value: 260000, suffix: "+") or as strings
// ("30%", "500+", "24/7", "Daily"). Split numeric strings into a number and a
// trailing symbol so they can animate; anything else is shown as-is.
function parseStat(value) {
  if (typeof value === "number") return { number: value, symbol: "" };

  const match = String(value)
    .trim()
    .match(/^(\d+(?:\.\d+)?)([%+]*)$/);

  return match
    ? { number: Number(match[1]), symbol: match[2] }
    : { number: null, symbol: "" };
}

function Counter({
  value,
  suffix = "",
  unit = "",
  decimals = 0,
  duration = 2000,
}) {
  const { number, symbol } = parseStat(value);
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (number === null) return;

    const element = ref.current;

    const startCounter = () => {
      let start = 0;
      const end = number;
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
  }, [number, duration]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-black">
      {number === null
        ? value
        : count.toLocaleString(undefined, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          })}
      {symbol}
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
