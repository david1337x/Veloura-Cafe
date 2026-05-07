import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Plus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  // Coffee
  { id: 1, name: "Velvet Espresso", description: "Double shot of our signature dark roast with rich crema.", price: "$6", rating: 4.9, category: "Coffee", image: "/images/menu-coffee.png" },
  { id: 2, name: "Midnight Latte", description: "Silky steamed milk, espresso, and a touch of activated charcoal.", price: "$7", rating: 4.8, category: "Coffee", image: "/images/menu-coffee.png" },
  { id: 3, name: "Amber Pour Over", description: "Single-origin Ethiopian beans brewed to perfection.", price: "$8", rating: 5.0, category: "Coffee", image: "/images/menu-coffee.png" },
  { id: 4, name: "Dark Ritual Cold Brew", description: "Steeped for 24 hours, served over artisanal ice spheres.", price: "$7", rating: 4.7, category: "Coffee", image: "/images/menu-coffee.png" },
  // Desserts
  { id: 5, name: "Obsidian Chocolate Tart", description: "Dark chocolate ganache in a cocoa crust with gold leaf.", price: "$12", rating: 5.0, category: "Desserts", image: "/images/menu-dessert.png" },
  { id: 6, name: "Velvet Crème Brûlée", description: "Classic vanilla bean custard with a dark caramelized sugar top.", price: "$10", rating: 4.8, category: "Desserts", image: "/images/menu-dessert.png" },
  { id: 7, name: "Dark Honey Baklava", description: "Layers of crisp phyllo, pistachios, and rich dark amber honey.", price: "$9", rating: 4.6, category: "Desserts", image: "/images/menu-dessert.png" },
  // Snacks
  { id: 8, name: "Truffle Arancini", description: "Crispy risotto balls filled with mozzarella and black truffle.", price: "$14", rating: 4.9, category: "Snacks", image: "/images/menu-snack.png" },
  { id: 9, name: "Smoked Salmon Crostini", description: "House-smoked salmon on sourdough with dill crème fraîche.", price: "$16", rating: 4.7, category: "Snacks", image: "/images/menu-snack.png" },
  { id: 10, name: "Burrata Toast", description: "Fresh burrata, heirloom tomatoes, and balsamic glaze on artisan bread.", price: "$15", rating: 4.8, category: "Snacks", image: "/images/menu-snack.png" },
  // Signature Drinks
  { id: 11, name: "Black Rose Cocktail", description: "Gin, blackberry liqueur, activated charcoal, and rose water.", price: "$18", rating: 4.9, category: "Signature Drinks", image: "/images/menu-drink.png" },
  { id: 12, name: "Golden Hour Mocktail", description: "Mango, saffron, ginger beer, and a smoked rosemary sprig.", price: "$12", rating: 4.5, category: "Signature Drinks", image: "/images/menu-drink.png" },
  { id: 13, name: "Midnight Negroni", description: "A dark twist on the classic with black walnut bitters.", price: "$20", rating: 4.8, category: "Signature Drinks", image: "/images/menu-drink.png" },
  // Breakfast Specials
  { id: 14, name: "Heritage Eggs Benedict", description: "Poached eggs, prosciutto, and saffron hollandaise on a dark muffin.", price: "$22", rating: 5.0, category: "Breakfast Specials", image: "/images/menu-breakfast.png" },
  { id: 15, name: "Sourdough French Toast", description: "Thick cut sourdough, espresso maple syrup, and mascarpone.", price: "$18", rating: 4.7, category: "Breakfast Specials", image: "/images/menu-breakfast.png" },
  { id: 16, name: "Avocado Smash", description: "Mashed avocado, chili flakes, feta, and poached egg on seeded rye.", price: "$16", rating: 4.6, category: "Breakfast Specials", image: "/images/menu-breakfast.png" },
];

const categories = ["All", "Coffee", "Desserts", "Snacks", "Signature Drinks", "Breakfast Specials"];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [addedItems, setAddedItems] = useState<number[]>([]);

  const filteredMenu = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const handleAdd = (id: number) => {
    setAddedItems(prev => [...prev, id]);
    setTimeout(() => {
      setAddedItems(prev => prev.filter(itemId => itemId !== id));
    }, 2000);
  };

  return (
    <section id="menu" className="py-24 lg:py-32 bg-background/95 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-[0.2em] text-sm uppercase mb-4 block"
          >
            Curated Offerings
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-12"
          >
            The Artisan Menu
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 md:gap-4 max-w-3xl mx-auto"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-sm font-medium tracking-wide transition-all duration-300 border ${
                  activeCategory === cat 
                    ? "bg-primary border-primary text-primary-foreground" 
                    : "bg-transparent border-white/10 text-foreground/70 hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-card/50 border border-white/5 overflow-hidden hover:border-primary/30 transition-colors duration-500"
              >
                <div className="aspect-square overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur-sm px-3 py-1 text-sm font-serif font-bold border border-white/10">
                    {item.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-sm font-medium text-foreground/90">{item.rating}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-foreground/60 text-sm font-light leading-relaxed mb-6 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <Button 
                    onClick={() => handleAdd(item.id)}
                    variant="outline" 
                    className="w-full rounded-none border-white/10 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                  >
                    {addedItems.includes(item.id) ? (
                      <span className="flex items-center gap-2 text-primary">
                        <Check className="w-4 h-4" /> Added to Order
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Plus className="w-4 h-4 text-primary group-hover:rotate-90 transition-transform" /> Add to Order
                      </span>
                    )}
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
