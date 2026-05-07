import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Eleanor Vance",
    role: "Local Artist",
    content: "Veloura isn't just a café; it's a mood. The Midnight Latte is extraordinary, and the velvet booths make me feel like I've stepped into a noir film. My favorite spot to sketch.",
    rating: 5,
    initials: "EV"
  },
  {
    id: 2,
    name: "Jameson Wright",
    role: "Food Critic",
    content: "The attention to detail here is staggering. The Obsidian Chocolate Tart is an absolute masterpiece. They treat coffee extraction with the reverence it deserves.",
    rating: 5,
    initials: "JW"
  },
  {
    id: 3,
    name: "Sophia Lin",
    role: "Creative Director",
    content: "Finally, a place in the city that understands aesthetic and flavor equally. The warm amber lighting and the jazz playlist create the perfect sanctuary after a long day.",
    rating: 4.8,
    initials: "SL"
  },
  {
    id: 4,
    name: "Marcus Thorne",
    role: "Coffee Enthusiast",
    content: "The Amber Pour Over changed my perspective on Ethiopian blends. The staff are incredibly knowledgeable and unhurried. A truly elevated experience.",
    rating: 5,
    initials: "MT"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
          <h2 className="text-primary font-medium tracking-[0.2em] text-sm uppercase">
            Whispers & Echoes
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center text-center"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.floor(testimonials[currentIndex].rating) ? "fill-primary text-primary" : "text-muted-foreground"}`} 
                  />
                ))}
              </div>
              
              <p className="text-xl md:text-3xl font-serif text-foreground leading-relaxed mb-10 font-light italic">
                "{testimonials[currentIndex].content}"
              </p>
              
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 border border-primary/20">
                  <AvatarFallback className="bg-background text-primary font-serif">{testimonials[currentIndex].initials}</AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <h4 className="text-foreground font-medium">{testimonials[currentIndex].name}</h4>
                  <p className="text-foreground/50 text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-primary w-8" : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
