import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background pt-20 pb-10 border-t border-white/10 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <svg className="text-primary w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
              </svg>
              <span className="font-serif text-xl font-bold tracking-widest text-foreground uppercase">
                VELOURA
              </span>
            </div>
            <p className="text-foreground/60 font-light text-sm mb-6 max-w-xs">
              A cinematic escape from the ordinary. Where coffee is a ritual and every detail is intentional.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li><a href="#about" className="hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#menu" className="hover:text-primary transition-colors">Artisan Menu</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#reservation" className="hover:text-primary transition-colors">Reservations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg text-foreground mb-6">Hours</h4>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li className="flex justify-between">
                <span>Mon - Thu</span>
                <span>7:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between text-primary">
                <span>Fri - Sun</span>
                <span>7:00 AM - 12:00 AM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg text-foreground mb-6">Newsletter</h4>
            <p className="text-foreground/60 font-light text-sm mb-4">
              Subscribe for exclusive tasting events and secret menu drops.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Email address" 
                className="bg-card border-white/10 rounded-none focus-visible:ring-primary h-10"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-10 px-6">
                JOIN
              </Button>
            </div>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground/40 font-mono">
            &copy; {new Date().getFullYear()} Veloura Café. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="text-xs text-foreground/60 hover:text-primary uppercase tracking-widest transition-colors flex items-center gap-2"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
