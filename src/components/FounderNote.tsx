export const FounderNote = () => {
  return (
    <section className="mt-5 py-4">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">

        <h2 className="mb-4 text-3xl sm:text-4xl font-semibold text-gray-900 text-center">
          Founder’s Note
        </h2>

        <div
          className="
            mx-auto max-w-4xl
            flex flex-col items-center gap-8
            rounded-3xl border border-white/40
            bg-white/80 backdrop-blur-md
            p-8 sm:p-10 shadow-md
            md:flex-row md:items-start
          "
        >
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="h-28 w-28 md:h-32 md:w-32 overflow-hidden rounded-full bg-gray-300">
              <img
                src="/founderimg.jpeg"
                alt="Founder"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Benak Sagar
            </h3>

            <p className="mb-4 text-sm font-medium text-gray-500">
              Founder & Managing Director
            </p>

            <p className="text-sm leading-relaxed text-gray-600 whitespace-pre-line">
{`Sagar is the Founder, Managing Director, and Creative Head of D’adore Interior LLP, a Bangalore-based interior design company established in 2017.

With 12+ years of experience and hundreds of completed projects, Sagar is known for blending aesthetics with functionality. A key milestone in his career is designing the clubhouse at Birla Alokya, the first residential project by Birla Estates.

His hands-on, on-site approach ensures each space is both beautiful and practical. Outside of work, Sagar is a cricketer, traveler, and avid reader — bringing the same passion and precision to all he does.`}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
