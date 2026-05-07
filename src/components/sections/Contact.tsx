import { MapPin, Phone, Mail, Instagram, Twitter, Facebook, Github, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-card relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
              Find Us
            </h2>
            <p className="text-foreground/70 font-light mb-10 max-w-md">
              Located in the heart of the Downtown District, Veloura Café is your escape from the city's relentless pace.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-background border border-white/10 p-3 rounded-sm">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-foreground mb-1">Address</h4>
                  <p className="text-foreground/70 font-light">Knowledge Park 3<br/>Greater Noida, 201310</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-background border border-white/10 p-3 rounded-sm">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-foreground mb-1">Phone</h4>
                  <p className="text-foreground/70 font-light">+91 9999999999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-background border border-white/10 p-3 rounded-sm">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-foreground mb-1">Email</h4>
                  <p className="text-foreground/70 font-light">contact@dav1337.com</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-serif font-bold text-lg text-foreground mb-4">Follow Our Journey</h4>
              <div className="flex gap-4">
                <a href="https://x.com/Dav1dnShepherd" className="w-12 h-12 bg-background border border-white/10 flex items-center justify-center rounded-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://github.com/david1337x" className="w-12 h-12 bg-background border border-white/10 flex items-center justify-center rounded-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://facebook.com/davidoesitbetter" className="w-12 h-12 bg-background border border-white/10 flex items-center justify-center rounded-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full h-[500px] bg-background border border-white/10 rounded-sm relative overflow-hidden"
          >
            {/* Map Placeholder Aesthetic */}
            <div className="absolute inset-0 opacity-20"
                 style={{
                   backgroundImage: `linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)`,
                   backgroundSize: '40px 40px'
                 }}
            ></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute"></div>
              <div className="w-4 h-4 bg-primary rounded-full relative z-10 border-2 border-background"></div>
              <div className="mt-4 bg-card/80 backdrop-blur-md border border-white/10 px-4 py-2 font-serif text-sm">
                Veloura Café
              </div>
            </div>
            <div className="absolute bottom-4 right-4 text-xs text-foreground/40 font-mono">
              LAT: 34.0522° N, LON: 118.2437° W
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
