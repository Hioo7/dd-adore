export const FourthSection = () => {
  return (
    <section className="mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">

        {/* Header */}
        <div className="mb-6 sm:mb-8 flex items-center justify-between">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold text-gray-900">
            Featured Projects
          </h2>

          <button className="rounded-full bg-[#142456] px-4 sm:px-6 py-2 text-xs sm:text-base font-medium text-white transition hover:bg-[#0f1c3d]">
            Get A Quote
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-3">

          {/* LEFT COLUMN – 2 BIG IMAGES */}
          <div className="flex flex-col gap-3 sm:gap-4">

            <div className="relative h-55 sm:h-72 lg:h-[23rem] overflow-hidden rounded-xl sm:rounded-2xl">
              <img
                src="/imgc.jpeg"
                className="h-full w-full object-cover"
                alt="Kitchen Interiors"
              />
              {/* <span className="absolute bottom-4 left-4 text-white text-sm sm:text-lg font-semibold">
                Kitchen Interiors
              </span> */}
            </div>

            <div className="relative h-55 sm:h-72 lg:h-[23rem] overflow-hidden rounded-xl sm:rounded-2xl">
              <img
                src="/heroimg1.png"
                className="h-full w-full object-cover"
                alt="Residential Interiors"
              />
              {/* <span className="absolute bottom-4 left-4 text-white text-sm sm:text-lg font-semibold">
                Residential Interiors
              </span> */}
            </div>

          </div>

          {/* RIGHT COLUMN – 3 SMALLER IMAGES */}
          <div className="flex flex-col gap-2 sm:gap-2">

            <div className="relative h-36 sm:h-48 lg:h-66 overflow-hidden rounded-xl sm:rounded-2xl">
              <img
                src="/img3.jpeg"
                className="h-full w-full object-cover"
                alt="Custom Furniture"
              />
              {/* <span className="absolute bottom-4 left-4 text-white text-sm sm:text-lg font-semibold">
                Custom Furniture
              </span> */}
            </div>

            <div className="relative h-36 sm:h-48 lg:h-60 overflow-hidden rounded-xl sm:rounded-2xl">
              <img
                src="/img4.jpg"
                className="h-full w-full object-cover"
                alt="Commercial Interiors"
              />
              {/* <span className="absolute bottom-4 left-4 text-white text-sm sm:text-lg font-semibold">
                Commercial Interiors
              </span> */}
            </div>

            <div className="relative h-36 sm:h-48 lg:h-60 overflow-hidden rounded-xl sm:rounded-2xl">
              <img
                src="/img5.jpg"
                className="h-full w-full object-cover"
                alt="Modular Kitchens"
              />
              {/* <span className="absolute bottom-4 left-4 text-white text-sm sm:text-lg font-semibold">
                Modular Kitchens
              </span> */}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
