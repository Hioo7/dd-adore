export const SixthSection = () => {
  return (
    <section className="w-full bg-white py-10 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 md:mb-12">
          How We Make A Difference
        </h2>

        {/* Headings */}
        <div className="grid grid-cols-[1fr_0.6fr_1fr] items-center mb-4 md:mb-6 text-center">
          <h3 className="text-sm md:text-lg font-medium">
            Traditional Providers
          </h3>
          <div className="text-xs md:text-base font-medium">VS</div>
          <h3 className="text-sm md:text-lg font-medium">
            D’adore Interiors
          </h3>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-[1fr_0.5fr_1fr] items-stretch">

      <div className="flex flex-col justify-between">
        {/* Top row – pushed DOWN more */}
        <div className="relative top-10 md:top-20 bg-indigo-50 px-3 md:px-6 py-4 md:py-6 text-right text-xs md:text-sm rounded-l-xl">
            Focus mainly on looks
        </div>

        {/* Middle row – normal */}
        <div className="bg-indigo-50 px-3 md:px-6 py-4 md:py-6 text-right text-xs md:text-sm rounded-l-xl">
            Standard layouts and repeat designs
        </div>

        {/* Bottom row – pulled UP more */}
        <div className="relative -top-10 md:-top-20 bg-indigo-50 px-3 md:px-6 py-4 md:py-6 text-right text-xs md:text-sm rounded-l-xl">
            Fragmented process with multiple vendors
        </div>
        </div>



          {/* Middle Column (TALL CARD) */}
          <div className="
            bg-indigo-100 
            border border-indigo-300 
            rounded-2xl
            px-3 md:px-6 
            py-6 md:py-10
            flex flex-col 
            justify-center 
            items-center 
            text-center
            min-h-[420px] md:min-h-[520px]
          ">

            <div className="flex flex-col items-center">
              <img
                src="/thoughtfulDesignIcon.png"
                alt="Thoughtful Design"
                className="w-6 h-6 md:w-9 md:h-9 mb-2"
              />
              <span className="text-xs md:text-sm font-medium">
                Thoughtful Designs
              </span>
            </div>

            <div className="flex flex-col items-center mt-6 md:mt-10">
              <img
                src="/customizedServiceIcon.png"
                alt="Customized Service"
                className="w-6 h-6 md:w-9 md:h-9 mb-2"
              />
              <span className="text-xs md:text-sm font-medium">
                Customized Service
              </span>
            </div>

            <div className="flex flex-col items-center mt-6 md:mt-10">
              <img
                src="/endToEndSolutionIcon.png"
                alt="End-to-End Solution"
                className="w-6 h-6 md:w-9 md:h-9 mb-2"
              />
              <span className="text-xs md:text-sm font-medium">
                End-to-End Solution
              </span>
            </div>

          </div>

          {/* Right Column */}
        <div className="flex flex-col justify-between">
            {/* Top row – pushed DOWN more */}
            <div className="relative top-10 md:top-20 bg-indigo-50 px-3 md:px-6 py-4 md:py-6 text-left text-xs md:text-sm font-medium rounded-r-xl">
                Design driven by real-life functionality
            </div>

            {/* Middle row – normal */}
            <div className="bg-indigo-50 px-3 md:px-6 py-4 md:py-6 text-left text-xs md:text-sm font-medium rounded-r-xl">
                Fully customized, lifestyle-focused designs
            </div>

            {/* Bottom row – pulled UP more */}
            <div className="relative -top-10 md:-top-20 bg-indigo-50 px-3 md:px-6 py-4 md:py-6 text-left text-xs md:text-sm font-medium rounded-r-xl">
                Single-team, end-to-end turnkey execution
            </div>
            </div>



        </div>
      </div>
    </section>
  );
};
