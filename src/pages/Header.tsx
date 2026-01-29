import {
  Phone,
  MessageCircle,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function FloatingHeader() {
  const phoneNumber = "919876543210";

  const linkedinUrl = "https://www.linkedin.com/company/d-adore-interiors/";
  const instagramUrl = "https://www.instagram.com/dadore.in/?hl=en";

  return (
    <header className="fixed top-4 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-[1400px] -translate-x-1/2">
      <div className="flex items-center justify-between rounded-full bg-[#142456] px-4 py-2 md:px-8 md:py-1 shadow-xl">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logodedore.png"
            alt="D'Adore Interiors"
            className="h-14 md:h-34 object-contain"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">

          {/* Social Icons – Desktop */}
          <div className="hidden md:flex items-center gap-2">
            {/* LinkedIn */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full bg-[#0A66C2] p-2 text-white hover:opacity-90 transition"
            >
              <Linkedin size={18} />
            </a>

            {/* Instagram */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full p-2 text-white transition hover:opacity-90"
              style={{
                background:
                  "radial-gradient(circle at 30% 110%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
              }}
            >
              <Instagram size={18} />
            </a>
          </div>

          {/* 📞 Call - Desktop */}
          <a
            href={`tel:${phoneNumber}`}
            className="hidden md:flex rounded-xl border-2 border-white/70 px-7 py-2 text-base font-semibold text-white hover:bg-white/10"
          >
            Call Now
          </a>

          {/* 💬 WhatsApp - Desktop */}
          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex rounded-xl border-2 border-white/70 px-7 py-2 text-base font-semibold text-white hover:bg-white/10"
          >
            WhatsApp Now
          </a>

          {/* 📱 Mobile Icons */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${phoneNumber}`}
              className="rounded-full bg-white p-2 text-[#142456]"
            >
              <Phone size={18} />
            </a>

            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-green-500 p-2 text-white"
            >
              <MessageCircle size={18} />
            </a>

            {/* LinkedIn – Mobile */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#0A66C2] p-2 text-white"
            >
              <Linkedin size={18} />
            </a>

            {/* Instagram – Mobile */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-white"
              style={{
                background:
                  "radial-gradient(circle at 30% 110%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
              }}
            >
              <Instagram size={18} />
            </a>
          </div>

          {/* Get Quote (Desktop only) */}
          <a
           href="https://forms.gle/ApeLX44uxkp4Z8JTA"
            className="hidden md:flex rounded-xl bg-white px-7 py-3 text-base font-semibold text-[#142456] hover:bg-gray-100"
          >
            Get A Quote
          </a>

        </div>
      </div>
    </header>
  );
}
