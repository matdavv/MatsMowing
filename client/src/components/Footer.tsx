import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 pb-24 md:pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-secondary mb-2">MAT'S MOWING</h3>
            <p className="text-gray-400">Friendly | Reliable | Professional</p>
          </div>
          
          <div className="flex flex-col gap-4">
            <a href="tel:+61431137119" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
              <Phone className="w-5 h-5 text-secondary" />
              <span className="text-lg">0431 137 119</span>
            </a>
            <div className="flex items-center gap-3 text-gray-300">
              <MapPin className="w-5 h-5 text-secondary" />
              <span>Servicing Local Area</span>
            </div>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://wa.me/61431137119"
              className="bg-[#25D366] p-3 rounded-full hover:bg-[#20bd5a] transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-6 h-6 text-white" />
            </a>
            <a 
              href="tel:+61431137119" 
              className="bg-secondary p-3 rounded-full hover:bg-yellow-400 transition-colors"
              aria-label="Call Us"
            >
              <Phone className="w-6 h-6 text-primary" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Mat's Mowing. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
