import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-4 md:hidden w-[90%] max-w-sm">
      <a 
        href="tel:+61431137119"
        className="flex-1 bg-secondary text-primary font-bold py-3 px-4 rounded-full shadow-lg flex items-center justify-center gap-2 hover:bg-yellow-400"
      >
        <Phone className="w-5 h-5" />
        Call Now
      </a>
      <a 
        href="https://wa.me/61431137119"
        className="flex-1 bg-[#25D366] text-white font-bold py-3 px-4 rounded-full shadow-lg flex items-center justify-center gap-2 hover:bg-[#20bd5a]"
      >
        <FaWhatsapp className="w-5 h-5" />
        WhatsApp
      </a>
    </div>
  );
}
