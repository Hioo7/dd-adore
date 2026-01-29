import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export const ThirdSection = () => {
  const stats = [
    { value: 12, label: "Years of Experience", icon: "/productsIcon.png" },
    {
      value: 4.9,
      label: "Satisfied Customer",
      icon: "/satisfiedCustomersIcon.png",
      type: "rating",
    },
    { value: 200, label: "Projects", icon: "/projectsIcon.png" },
  ];

  const services = [
    "Commercial & Residential Interior Design",
    "End-to-End Interior Solutions",
    "Interior Renovations",
    "Kitchen Interiors",
    "Custom Furniture",
    "Residential Construction & Development",
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section className="w-full bg-white pt-10 px-0 lg:px-20">
      <div className="mx-auto max-w-7xl px-[7px]">

        {/* Stats */}
        <div
          ref={ref}
          className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6"
        >
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-xl border-2 border-[#142456] py-6 sm:py-8 text-center"
            >
              <img
                src={item.icon}
                alt={item.label}
                className="mb-2 h-10 w-10 sm:h-12 sm:w-12 object-contain"
              />

              <h3 className="text-3xl sm:text-4xl font-bold text-[#142456]">
                {item.type === "rating" ? (
                  <>
                    {item.value} <span className="text-yellow-500">★</span>
                  </>
                ) : (
                  <>
                    {inView ? (
                      <CountUp start={0} end={item.value} duration={2} />
                    ) : (
                      0
                    )}
                    +
                  </>
                )}
              </h3>

              <p className="mt-1 text-sm sm:text-base text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="mt-12 flex flex-col items-center">
          <h2 className="mb-8 text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-[#142456]">
            Our Services
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl">
            {services.map((service, index) => (
              <li
                key={index}
                className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm sm:text-base text-gray-800 shadow-sm hover:shadow-md transition"
              >
                <span className="flex h-9 w-9 min-w-[36px] items-center justify-center rounded-full bg-[#142456] text-white text-sm font-semibold">
                  ✓
                </span>
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};
