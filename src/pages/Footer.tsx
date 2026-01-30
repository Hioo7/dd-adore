import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0A1A40] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* Logo */}
        <div className="flex flex-col items-start">
            <img 
             src="/logodedore.png"
                alt="D'Adore Interiors Logo"
                className="h-30 object-contain mb-4"
             />
        </div>

        {/* Social Handles Only */}
        <div className="flex flex-col space-y-2">
          <h2 className="font-semibold">Social Handles</h2>
          <div className="flex space-x-2 mt-1">
            <a
              href="https://www.instagram.com/dadore.in/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6 text-gradient" />
            </a>
            <a
              href="https://www.linkedin.com/company/d-adore-interiors/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6 text-blue-600" />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt />
            <span>9945466887</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <a href="mailto:dadoreinterior@gmail.com" className="underline">
              dadoreinterior@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt />
            <span>204, Esteem Plaza, 13th Cross Road, Sadashivnagar, Bangalore 560080</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
