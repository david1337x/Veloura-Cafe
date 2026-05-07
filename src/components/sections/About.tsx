import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ end, label }: { end: number, label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-serif text-primary mb-2">
        {count}{end > 1000 ? "+" : ""}
      </div>
      <div className="text-xs uppercase tracking-widest text-foreground/60">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-primary text-sm font-medium tracking-widest uppercase mb-4">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              A cinematic escape <br/> from the ordinary.
            </h3>
            <div className="w-16 h-[1px] bg-primary/50 mb-8"></div>
            <p className="text-foreground/70 font-light text-lg mb-6 leading-relaxed">
              Founded in 2026, Veloura Café was born from a desire to create a sanctuary where time slows down. We believe that coffee is not just a beverage, but a tactile ritual to be savored.
            </p>
            <p className="text-foreground/70 font-light text-lg mb-12 leading-relaxed">
              Our master roasters source only the finest single-origin beans, while our pastry chefs craft delicacies that are as visually stunning as they are delicious. Every detail, from the velvet booths to the amber lighting, is intentionally designed for your comfort.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5">
              <Counter end={12000} label="Customers" />
              <Counter end={48} label="Varieties" />
              <Counter end={8} label="Years" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
              <img 
                src="/images/about.png" 
                alt="Veloura Barista" 
                className="w-full h-full object-cover rounded-sm shadow-2xl brightness-90 contrast-125"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/30 rounded-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-primary/30 rounded-sm"></div>
              <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 glass p-6 rounded-sm max-w-[200px] hidden md:block">
                <p className="text-sm font-serif italic text-foreground/90">"The perfect extraction requires patience, precision, and passion."</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
