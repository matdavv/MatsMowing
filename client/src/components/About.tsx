import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, HeartHandshake } from "lucide-react";
import aboutImg from "@assets/generated_images/tidy_backyard_garden.png";

export function About() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute -inset-4 bg-secondary/20 rounded-2xl transform -rotate-3 -z-10" />
            <img 
              src={aboutImg} 
              alt="Tidy garden" 
              className="rounded-xl shadow-xl w-full object-cover h-[400px]"
            />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg flex items-center gap-3 max-w-[200px]">
              <div className="bg-primary/10 p-2 rounded-full text-primary">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <p className="font-bold text-sm text-primary">Fully Insured</p>
                <p className="text-xs text-muted-foreground">Peace of mind guaranteed</p>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose Mat's Mowing?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We take pride in getting your property looking its absolute best. Whether it's a regular mow or a complete garden tidy-up, we bring professional equipment and a friendly attitude to every job.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-2 rounded-full shrink-0 mt-1">
                    <HeartHandshake className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">NDIS Support Available</h3>
                    <p className="text-muted-foreground">We proudly support NDIS clients with reliable and regular maintenance services tailored to your needs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-2 rounded-full shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Regular or One-off Jobs</h3>
                    <p className="text-muted-foreground">Flexible scheduling to suit you. Book us for a single clean-up or set up a regular maintenance schedule.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
