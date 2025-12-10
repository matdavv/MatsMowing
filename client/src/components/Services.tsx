import { motion } from "framer-motion";
import { Scissors, Shovel, Trees, Axe, Wrench, Sprout } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Lawn Mowing",
    description: "Professional mowing with edging and clean up for a perfect finish."
  },
  {
    icon: Sprout, // Using Sprout as a proxy for whipper snipping/detail work
    title: "Whipper Snipping",
    description: "Precise trimming along fences, walls, and garden beds."
  },
  {
    icon: Shovel,
    title: "Planting & Weeding",
    description: "Garden bed maintenance, weed removal, and new planting."
  },
  {
    icon: Axe,
    title: "Chainsawing",
    description: "Safe removal of small trees, branches, and woody weeds."
  },
  {
    icon: Wrench,
    title: "General Maintenance",
    description: "All-round property care to keep everything functioning and looking good."
  },
  {
    icon: Trees,
    title: "Garden Tidy Up",
    description: "Complete overhaul of overgrown gardens to restore order."
  }
];

export function Services() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg">
            Complete garden care solutions for your home. We handle the hard work so you can enjoy your yard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mb-6 text-primary">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
