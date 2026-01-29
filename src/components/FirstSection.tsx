import { useEffect, useState } from "react";
// import FloatingHeader from "../pages/Header";

const images = [
  "/heroimg1.png",
  "/heroimg2.png",
  "/heroimg3.png",
];

export const FirstSection = () => {

  const [current, setCurrent] = useState(0);

  const getAQuote = () => {
    window.open("https://forms.gle/ApeLX44uxkp4Z8JTA", "_self");
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // 5 sec per image

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="first-section relative h-screen w-full overflow-hidden">

      {/* Header */}
      {/* <div className="header-section relative z-50">
        <FloatingHeader />
      </div> */}

      {/* Hero */}
      <div className="hero-section relative h-full w-full">

        {/* Background Images */}
        {images.map((img, index) => (
          <img
            key={img}
            src={img}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out
              ${index === current ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}

        {/* Fade Overlay */}
        <div className="absolute inset-0 bg-black/15 z-10" />

      
     {/* Center Text */}
        <div className="relative z-20 flex h-full items-center justify-center px-4 text-center">
        <h1 className=" text-white  text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold  tracking-wide">
            Experience Luxury Interiors
        </h1>
        </div>

        {/* Bottom Left Glass Card - centered on mobile */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 z-20 w-11/12 md:max-w-md rounded-2xl bg-black/60 p-6 text-white backdrop-blur-lg text-center md:text-left">
          <p className="text-sm leading-relaxed">
            We design and execute modern residential and commercial interiors
            with smart space planning, custom designs, and seamless turnkey
            solutions.
          </p>
          <button onClick={getAQuote}>
            <span className="mt-4 inline-flex items-center rounded-xl border-2 border-white px-5 py-2 text-sm font-semibold transition bg-white text-black cursor-pointer hover:bg-transparent hover:text-white">
               <span>Get A Quote</span>
               <svg className="ml-3 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                 <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                 <path d="M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};
