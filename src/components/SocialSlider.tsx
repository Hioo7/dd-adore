import { useState, useRef, useEffect } from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

export const SocialSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const socialLinks = [
    { icon: <FaInstagram />, url: "https://www.instagram.com/dadore.in/?hl=en", color: "#E4405F" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/company/d-adore-interiors/", color: "#0A66C2" },
  ];

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Desktop Sticky Sidebar */}
      <div className="hidden md:flex flex-col fixed left-0 top-1/3 z-50 
                      space-y-3 h-48 w-14 rounded-r-full 
                      backdrop-blur-md bg-white/30 
                      items-center justify-center shadow-lg">
        {socialLinks.map((item, i) => (
          <a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full shadow-lg transform hover:scale-110 transition-transform"
            style={{ color: "white", backgroundColor: item.color }}
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Mobile Swipe Panel */}
      <div className="md:hidden fixed left-0 top-0 h-full z-50" ref={sidebarRef}>
        {/* Swipe Handle */}
        <div
          className="w-6 h-24 bg-indigo-600 rounded-r-full flex items-center justify-center text-white shadow-lg cursor-pointer fixed left-0 top-1/3 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="rotate-90 font-bold text-lg">≡</span>
        </div>

        {/* Hidden Sidebar */}
        {/* Hidden Sidebar */}
<div
  className={`fixed top-0 left-0 h-full w-48 shadow-lg transform transition-transform duration-300 flex flex-col items-center justify-center space-y-6
    backdrop-blur-md bg-white/30
    ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
>
  {socialLinks.map((item, i) => (
    <a
      key={i}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform"
      style={{ color: "#ffffff", backgroundColor: item.color }}
    >
      {item.icon}
    </a>
  ))}
</div>

      </div>
    </>
  );
};
