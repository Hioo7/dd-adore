// Array of partner logos (you can add many more)
const partners = [
  { name: "Greenlam Laminates", logo: "/greenlam.png" },
  { name: "Faber", logo: "/faber.png" },
  { name: "Häfele", logo: "/hafele.png" },
  { name: "Tesa", logo: "/tesa.png" },
  { name: "Asian Paints", logo: "/asianpaints.png" },
  { name: "Greenply", logo: "/greenply.png" },
  { name: "Plyneer", logo: "/plyneer.png" },
  { name: "Signature", logo: "/signature.png" },
];

// Duplicate array for seamless loop
const scrollingPartners = [...partners, ...partners];

export const TrustedPartners = () => {
  return (
    <section className="bg-gray-50 py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
          Our Trusted Partners
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          We collaborate with industry-leading brands to ensure premium quality,
          durability, and world-class finishes in every project we deliver.
        </p>

        {/* Moving strip */}
        <div className="relative mt-12 w-full overflow-hidden">
          {/* Gradient fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          {/* Scrolling container */}
          <div className="flex w-max animate-scroll gap-16">
            {scrollingPartners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[140px]"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-14 sm:h-16 object-contain hover:grayscale-0 transition"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Animation styles */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}
      </style>
    </section>
  );
};
