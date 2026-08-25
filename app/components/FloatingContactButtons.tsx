import { FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">

      {/* WhatsApp */}
      <a
        href="https://wa.me/919959354255"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      >
        <FaWhatsapp size={30} />
      </a>

      {/* Call */}
      <a
        href="tel:+919959354255"
        aria-label="Call Now"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-700 hover:shadow-xl"
      >
        <Phone size={25} />
      </a>

    </div>
  );
}