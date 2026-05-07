import { motion } from "framer-motion";

export default function Offers() {
  return (
    <section className="py-20 relative bg-background overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 noise-overlay opacity-[0.02]"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden bg-card/80 border border-white/5 p-10 flex flex-col justify-center min-h-[300px] hover:border-primary/50 transition-colors duration-500"
          >
            {/* Decorative Glow */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
            
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium tracking-widest uppercase mb-6 border border-primary/20">
                Happy Hour
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Twilight Tastings
              </h3>
              <p className="text-foreground/70 font-light mb-8 max-w-sm">
                Join us Monday through Thursday from 5PM to 7PM. Enjoy 50% off all signature cocktails and select artisan snacks.
              </p>
              <button className="text-sm font-medium uppercase tracking-widest text-primary border-b border-primary pb-1 hover:text-primary-foreground hover:border-primary-foreground transition-colors">
                View Details
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative overflow-hidden bg-card/80 border border-white/5 p-10 flex flex-col justify-center min-h-[300px] hover:border-primary/50 transition-colors duration-500"
          >
            {/* Decorative Glow */}
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-all duration-700"></div>
            
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary-foreground text-xs font-medium tracking-widest uppercase mb-6 border border-secondary/20">
                Weekend Brunch
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                The Morning Ritual
              </h3>
              <p className="text-foreground/70 font-light mb-8 max-w-sm">
                Elevate your weekend mornings with our exclusive brunch menu, featuring our famous Heritage Eggs Benedict.
              </p>
              <button className="text-sm font-medium uppercase tracking-widest text-primary border-b border-primary pb-1 hover:text-primary-foreground hover:border-primary-foreground transition-colors">
                Reserve Now
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
