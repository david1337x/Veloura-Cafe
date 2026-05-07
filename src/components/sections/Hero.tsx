import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax effect simulation */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/images/hero.png')",
          backgroundAttachment: "fixed" 
        }}
      >
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent"></div>
      </div>
      
      {/* Noise Overlay */}
      <div className="noise-overlay"></div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-primary font-medium tracking-[0.2em] text-sm uppercase mb-4 block">
            EST. 2026 • GREATER NOIDA
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-[1.1] mb-6 max-w-4xl mx-auto">
            Where Every Sip <br/>
            <span className="italic font-light text-foreground/90">Tells a Story</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-10 font-light"
        >
          Step into a dimly-lit, cinematic world where coffee is a ritual and food is an art form. Savour the moment at Veloura Café.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button 
            onClick={() => scrollTo("#menu")}
            size="lg" 
            className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-none h-14 px-8 text-sm tracking-widest"
          >
            VIEW MENU
          </Button>
          <Button 
            onClick={() => scrollTo("#reservation")}
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 rounded-none h-14 px-8 text-sm tracking-widest"
          >
            RESERVE A TABLE
          </Button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
        onClick={() => scrollTo("#about")}
      >
        <span className="text-xs uppercase tracking-widest text-foreground/60">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="text-primary w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
