import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Sarah Jenkins",
    text: "Mat did an incredible job on our overgrown backyard. He was fast, efficient, and very friendly. Highly recommend!",
    rating: 5
  },
  {
    name: "David Ross",
    text: "Reliable service every time. I've been using Mat for 6 months now for regular mowing and my lawn has never looked better.",
    rating: 5
  },
  {
    name: "Emily Chen",
    text: "Great to find someone who supports NDIS clients with such patience and professionalism. Thank you Mat!",
    rating: 5
  }
];

export function Reviews() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Our Customers Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <div className="flex gap-1 mb-4 text-secondary">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-lg mb-6 text-gray-100 italic">"{review.text}"</p>
              <div className="font-bold text-secondary">{review.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
