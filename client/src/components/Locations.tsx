import { MapPin } from "lucide-react";

const locations = [
  "Ocean Shores",
  "Brunswick Heads",
  "Burringbar",
  "Mooball",
  "Pottsville",
  "Mullumbimby",
  "Murwillumbah",
  "Kingscliff", // Corrected spelling from user's "Kingscliffe" to "Kingscliff" (kept one if duplicate or just listed both if distinct, but likely same)
  "Hastings Point",
  "Kingscliff", // User listed Kingscliffe and Kingscliff. I'll just use Kingscliff once if they are the same. actually user wrote "Kingscliffe, Hastings Point, Kingscliff". I will dedup to Kingscliff.
];

// User text: "Northern Rivers, NSW including - Ocean Shores, Brunswick Heads, Burringbar, Mooball, Pottsville, Mullumbimby, Murwillumbah, Kingscliffe, Hastings Point, Kingscliff and surrounding areas."
// I will render this nicely.

export function Locations() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-green-50 rounded-full mb-6">
          <MapPin className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl font-bold text-primary mb-6">Areas We Service</h2>
        <p className="text-xl text-gray-700 font-medium mb-8">
          Proudly serving the <span className="text-secondary font-bold">Northern Rivers, NSW</span> region
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {["Ocean Shores", "Brunswick Heads", "Burringbar", "Mooball", "Pottsville", "Mullumbimby", "Murwillumbah", "Hastings Point", "Kingscliff"].map((town) => (
            <span key={town} className="bg-gray-50 px-4 py-2 rounded-lg text-gray-600 border border-gray-100 font-medium">
              {town}
            </span>
          ))}
          <span className="bg-secondary/10 px-4 py-2 rounded-lg text-primary-foreground border border-secondary/20 font-bold italic">
            & Surrounding Areas
          </span>
        </div>
      </div>
    </section>
  );
}
