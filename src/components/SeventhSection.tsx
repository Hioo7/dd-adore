import { useEffect, useRef, useState } from "react";

 const testimonials = [
  {
    name: "Suhas Urs",
    text: "Our home, built over a decade ago, needed a refresh. A friend who had worked with D'adore Interiors earlier and spoke highly of them recommended their services. After working with them for nearly four months, they exceeded all our expectations. We renovated our TV unit, two bathrooms, the main entrance area, and had the interiors and exteriors painted—all handled by D'adore. Sagar and his team have an excellent design sense and a strong execution team that brought every idea to life. We were regularly updated on vendor coordination and site progress. Their proactive and professional approach made the entire process smooth. Our home now has a beautiful new look that we absolutely love, thanks to the D'adore Interiors team. I highly recommend D'adore Interiors for anyone looking to transform their home with smart, stylish, and reliable interior design solutions."
  },
  {
    name: "Arti S Rungta",
    text: "We approached D'adore based on the recommendation by our interior designer and it turned out to be exactly what we were looking for. Sagar was approachable for any query and his work style is thoroughly professional right from maintaining the check list, providing details of the work schedule, costing, etc. He listens to the requirements carefully and endeavors to fulfill them with the best solutions. A glimpse of before and after work pics speak all. In a nutshell, A wholesome solution for all the services required for home renovation."
  },
  {
    name: "Rocky Samsal",
    text: "I recently had the pleasure of working with Sagar on our home renovation project. From start to finish, Sagar was professional, creative and a true pleasure to work with. His attention to detail and ability to bring our vision to life exceeded our expectations. He has a great sense of style and was able to seamlessly blend our personal taste’s with his organization's own expertise to create a beautiful, iconic space. The complete D'adore team was also very responsive and communicative throughout the process, ensuring that everything was running smoothly and that we were happy with the progress. I highly recommend Sagar and D'adore to anyone looking for a talented and professional interior designer. They truly made our home a beautiful abode and I couldn't be happier with the results. Thank you Sagar!"
  },
  {
    name: "Sidhu",
    text: "D’adore Interior truly feels like family to us. They delivered our dream home with exceptional quality, cost-effective pricing, and a warm, professional approach. We had initially booked another vendor, but after seeing Sagar's designs, we confidently switched to D’adore—and it was the best decision. Sagar’s commitment to quality and perfection stood out. The project was completed on time, with daily updates and complete transparency. His passion, attention to detail, and the strong client relationship he builds make him the best in the field. A heartfelt thank you to Sagar and the entire D’adore team for the flawless execution and beautiful results."
  },
  {
    name: "Disha Bhandari",
    text: "It was a complete pleasure to work with the D’adore team… they are very professional, proficient and adept at the work they do. They have good processes, approachable and a helpful team with very good workers for all kind of work. The best part was that they managed to finish the work before time which is absolutely unheard of… I am very thankful to Sagar and his team for a great finish to our home."
  },
  {
    name: "Achaiah C S",
    text: "Getting our wardrobe and TV unit done had become very overwhelming for us. We had no idea where to start, what to choose and how the end product had to be like. We desperately needed someone who could give us some clarity and help us understand how we can go about going through the whole process of getting this done. Sagar from D'adore interiors was exactly what we needed. He was extremely patient with all our doubts and confusions and helped us get to a vision for our requirements. He had a great sense of design and style. Him and his very capable team did a great job for us and all of it was within our little budget. We are really happy with the end result. I highly recommend D'adore interiors."
  },
  {
    name: "Prashanth Neergundha",
    text: "The ambience of a room—or even an entire home—can be greatly influenced by the right choice of furniture, walls, flooring, ceilings, and lighting. D’adore Interiors gave us the home we had always dreamed of. The journey from concept to execution was seamless, and having them on board to transform our space was one of the best decisions we made. They are highly professional and skilled, accommodating all my requirements while ensuring the project was delivered exactly on the agreed date. Overall, D’adore Interiors did an outstanding job. We are truly overwhelmed and delighted with the complete design and execution of the project, including the kitchen. I strongly recommend D'adore Interiors."
  },
  {
    name: "Chirag Turakhia",
    text: "Sagar and team have done a fantastic job in bringing our dream home to reality. They are easy to work with, prompt in responding to our queries and always try innovative methods to get the job done. They understand quality and make suggestions to ensure the furniture has a long life without hassles. They are honest and transparent in their dealings and I would highly recommend their services to everyone."
  },
  {
    name: "Rajeev Ranjan",
    text: "I am a proud customer of D’adore. My flat’s furnishing work was recently completed, and I couldn’t be happier. Despite my tight budget, the team worked thoughtfully and designed everything according to my convenience without compromising on quality. They were flexible enough to accommodate last-minute changes and completed the project on time. They kept their word and did not surprise me with any unexpected extra charges, which is something many dealers tend to do. On top of that, they offer a full two-year free maintenance service. I would definitely recommend giving them a try!"
  },
  {
    name: "Swapan Nag",
    text: "I came across D’adore through a common friend and spoke with Sagar about the interiors for my new flat. The way he communicated, connected with me, and understood my requirements instantly convinced me to go ahead with him—and I haven’t regretted that decision for a moment. Sagar has an excellent team of skilled workers who diligently complete their tasks with dedication. He never compromised on the quality of materials and gave me the freedom to design my own home. The result was exactly what I had envisioned and hoped for. Sagar is highly professional, competent, and very reasonable in his approach. I sincerely thank him for giving me the home I always wanted and wholeheartedly recommend D’Adore. Wishing Sagar and his team all the very best for their future endeavors—may God bless you all!"
  },
];


export const TestimonialsSection = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState<number>(testimonials.length);
  const [slideWidth, setSlideWidth] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const slides = [...testimonials, ...testimonials, ...testimonials];

  const updateWidth = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    const first = slider.children[0] as HTMLElement | undefined;
    if (!first) return;
    setSlideWidth(first.offsetWidth);
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      if (!isPaused) setIndex((i) => i + 1);
    }, 4000);
    return () => clearInterval(id);
  }, [isPaused]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || !slideWidth) return;

    slider.style.transition = "transform 0.45s ease";
    slider.style.transform = `translateX(-${index * slideWidth}px)`;

    const onEnd = () => {
      if (index >= testimonials.length * 2) {
        slider.style.transition = "none";
        setIndex(testimonials.length);
        slider.style.transform = `translateX(-${testimonials.length * slideWidth}px)`;
      }
      if (index < testimonials.length) {
        slider.style.transition = "none";
        const reset = testimonials.length + (index % testimonials.length);
        setIndex(reset);
        slider.style.transform = `translateX(-${reset * slideWidth}px)`;
      }
    };

    slider.addEventListener("transitionend", onEnd);
    return () => slider.removeEventListener("transitionend", onEnd);
  }, [index, slideWidth]);

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Client Testimonials
        </h2>

        <div
          className="relative flex items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow */}
          <button
            onClick={() => setIndex((i) => i - 1)}
            className="hidden md:flex absolute left-0 z-10 bg-white rounded-full shadow hover:scale-105 transition-transform"
          >
            <img src="/leftArrow.png" className="w-10 h-10 p-2" />
          </button>

          {/* Slider */}
          <div
            className="overflow-hidden w-full"
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX;
              touchEndX.current = null;
              setIsPaused(true);
            }}
            onTouchMove={(e) => {
              touchEndX.current = e.touches[0].clientX;
            }}
            onTouchEnd={() => {
              const start = touchStartX.current;
              const end = touchEndX.current;
              if (start == null || end == null) {
                setIsPaused(false);
                return;
              }
              const delta = start - end;
              const threshold = 50;
              if (Math.abs(delta) > threshold) {
                if (delta > 0) setIndex((i) => i + 1);
                else setIndex((i) => i - 1);
              }
              touchStartX.current = null;
              touchEndX.current = null;
              setTimeout(() => setIsPaused(false), 500);
            }}
          >
            <div ref={sliderRef} className="flex">
              {slides.map((item, i) => (
                <div
                  key={i}
                  className="w-full flex-shrink-0 px-3"
                >
                  <div className="rounded-2xl bg-white shadow-xl p-6 h-[420px] flex flex-col">
                    <p className="font-bold text-indigo-900 text-lg mb-2">{item.name}</p>
                    <p className="text-gray-700 text-sm overflow-auto">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => setIndex((i) => i + 1)}
            className="hidden md:flex absolute right-0 z-10 bg-white rounded-full shadow hover:scale-105 transition-transform"
          >
            <img src="/rightArrow.png" className="w-10 h-10 p-2" />
          </button>
        </div>
      </div>
    </section>
  );
};
