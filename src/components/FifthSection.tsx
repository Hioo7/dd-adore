
export const FifthSection = () => {

  const proviedData = [
    {
      icon: "/qualityAssuranceIcon.png",
      title: "Quality Assurance",
      desc: "We are committed to deliver premium interior design solutions backed by superior quality. From sourcing high-grade materials to expert craftsmanship and personalized customer service, we uphold the highest standards at every stage."
    },
    {
      icon: "/innovationIcon.png",
      title: "Innovation",
      desc: "Innovation is the heart of our design philosophy. We embrace the latest interior design trends, techniques, and technologies to craft modern, functional, and aesthetically stunning spaces."
    },
    {
      icon: "/personalizedCustomizationIcon.png",
      title: "Personalized Customization",
      desc: "At D'adore Interior, we specialize in customized interior design solutions that reflect your unique style, taste, and lifestyle needs."
    },
  ];

  const brandPromises = [
    { icon: "/transparencyIcon.png", title: "Transparency & Trust" },
    { icon: "/qualityCraftsmanshipIcon.png", title: "Quality Craftsmanship" },
    { icon: "/longTermReliabilityIcon.png", title: "Long-Term Reliability" },
    { icon: "/thoughtfulDesignIcon.png", title: "Thoughtful Design" },
  ];

  return (
    <>
      <section className="mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">

          {/* What We Provide */}
          <h2 className="mb-8 text-3xl sm:text-4xl font-semibold text-gray-900 text-center md:text-start">
            What We Provide
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {proviedData.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white/70 p-6 shadow-sm transition hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                  <img src={item.icon} alt={item.title} className="h-6 w-6" />
                </div>

                <h3 className="mb-3 text-lg font-semibold text-blue-950">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        <div className="mt-14">
  <h2 className="mb-8 text-3xl sm:text-4xl font-semibold text-gray-900 text-center md:text-start">
    Brand Promise
  </h2>

  <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-4">
    {brandPromises.map((item, i) => (
      <div
        key={i}
        className="flex flex-col items-center rounded-xl bg-white/70 p-6 text-center shadow-sm"
      >
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
          <img src={item.icon} alt={item.title} className="h-6 w-6" />
        </div>

        <p className="text-sm font-medium text-blue-950">
          {item.title}
        </p>
      </div>
    ))}
  </div>
</div>

        </div>
      </section>

    
    </>
  );
};
