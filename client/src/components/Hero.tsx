import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import heroBg from "@assets/generated_images/man_mowing_a_lawn.png";

export function Hero() {
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
            MAT'S MOWING
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-2 text-secondary">
            FRIENDLY | RELIABLE | PROFESSIONAL
          </p>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Your local expert for lawn mowing, garden maintenance, and property care. 
            NDIS Support Available & Fully Insured.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
        >
          <a 
            href="tel:0431137119"
            className="flex-1 flex items-center justify-center gap-2 bg-secondary text-primary-foreground font-bold py-4 px-8 rounded-full shadow-lg hover:bg-yellow-400 transition-transform hover:scale-105 active:scale-95"
          >
            <Phone className="w-5 h-5" />
            Call 0431 137 119
          </a>
          <a 
            href="https://wa.me/61431137119"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-[#20bd5a] transition-transform hover:scale-105 active:scale-95"
          >
            <FaWhatsapp className="w-6 h-6" />
            WhatsApp Me
          </a>
        </motion.div>
      </div>
      
      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-background"></path>
        </svg>
      </div>
    </div>
  );
}
