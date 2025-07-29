import bagaraKhanaChickenKorma from "@/assets/Bagara khana chicken korma.png";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import muttonBiryani from "@/assets/mutton-biryani.jpg";
import chickenBiryani from "@/assets/chicken-biryani.jpg";
import tandooriRoti from "@/assets/tandoori-roti.jpg";
import drinks from "@/assets/drinks.jpg";
import samosa from "@/assets/samosa.jpg";
import muttonMasala from "@/assets/mutton-masala.jpg";
import chickenMasala from "@/assets/chicken-masala.jpg";
import placeholder from "@/../public/placeholder.svg";
import khajoor from "@/assets/khajoor.png";
import muttonKheema from "@/assets/Mutton Kheema.png";
import haleem from "@/assets/Haleem.png";
import muttonTalawa from "@/assets/mutton talawa.png";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import chicken65 from "@/assets/65.png";
import masalaChicken from "@/assets/masala chicken.png";
import rumaliRoti from "@/assets/rumali.png";
import pori from "@/assets/pori.png";
import khichdiKhattaKheema from "@/assets/khichdi khatta kheema.png";
import tandooriChicken from "@/assets/tandoori chicken.png";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Scroll animations
  const menuRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: menuRef,
    offset: ["start start", "end end"]
  });
  
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);

  const categories = ["All", "Mutton Dishes(Beef)", "Chicken Dishes", "Tandoori/Sides", "Drinks"];

  const menuItems = [
    { name: "Bagara khana chicken korma", price: "₹60", category: "Chicken Dishes", description: "Simple mutton preparation with authentic taste", image: bagaraKhanaChickenKorma },
    // Mutton Dishes(Beef)
    { name: "Mutton Biryani Full", price: "₹140", category: "Mutton Dishes(Beef)", description: "Aromatic full plate Hyderabadi dum biryani with tender mutton", image: muttonBiryani },
    { name: "Mutton Biryani Single", price: "₹110", category: "Mutton Dishes(Beef)", description: "Single serving of authentic mutton biryani", image: muttonBiryani },
    { name: "Mutton Family Pack", price: "₹350", category: "Mutton Dishes(Beef)", description: "Family size portion perfect for sharing", image: muttonBiryani },
    { name: "Mutton Jumbo Pack", price: "₹500", category: "Mutton Dishes(Beef)", description: "Large family pack for group dining", image: muttonBiryani },
    { name: "Mutton Masala", price: "₹100", category: "Mutton Dishes(Beef)", description: "Rich and spicy mutton curry with traditional spices", image: muttonMasala },
    { name: "Dum Ka Kheema", price: "₹150", category: "Mutton Dishes(Beef)", description: "Spiced minced mutton curry", image: muttonKheema },
    { name: "Khichdi Khatta Kheema", price: "₹60", category: "Mutton Dishes(Beef)", description: "Traditional Hyderabadi khichdi served with tangy khatta and flavorful kheema.", image: khichdiKhattaKheema },

    // Chicken Dishes
    { name: "Chicken Biryani", price: "₹170", category: "Chicken Dishes", description: "Fragrant basmati rice with succulent chicken pieces", image: chickenBiryani },
    { name: "Chicken Family Pack (2 pcs)", price: "₹400", category: "Chicken Dishes", description: "Family size chicken biryani with 2 pieces", image: chickenBiryani },
    { name: "Chicken Jumbo Pack (4 pcs)", price: "₹600", category: "Chicken Dishes", description: "Jumbo pack with 4 chicken pieces", image: chickenBiryani },
    { name: "Chicken Masala", price: "₹120", category: "Chicken Dishes", description: "Spicy and flavorful chicken curry", image: masalaChicken },
    { name: "CHICKEN 65 HALF", price: "₹140", category: "Chicken Dishes", description: "Crispy and spicy fried chicken, half portion", image: chicken65 },
    { name: "CHICKEN 65 FULL", price: "₹280", category: "Chicken Dishes", description: "Crispy and spicy fried chicken, full portion", image: chicken65 },
    { name: "Tandoori Chicken", price: "₹300", category: "Chicken Dishes", description: "Classic tandoori chicken marinated in spices and roasted to perfection.", image: tandooriChicken },

    // Mutton/Beef Dishes
    { name: "MUTTON BEEF TALAWA HALF", price: "₹100", category: "Mutton Dishes", description: "Half plate of spicy fried mutton/beef", image: muttonTalawa },
    { name: "HALEEM BEEF PLATE", price: "₹110", category: "Mutton Dishes", description: "Classic beef haleem, plate size", image: haleem },
    { name: "HALEEM BEEF SPECIAL", price: "₹140", category: "Mutton Dishes", description: "Special beef haleem, extra rich", image: haleem },
    { name: "HALEEM BEEF FAMILY", price: "₹350", category: "Mutton Dishes", description: "Family pack beef haleem", image: haleem },
    { name: "HALEEM BEEF JUMBO", price: "₹500", category: "Mutton Dishes", description: "Jumbo pack beef haleem for groups", image: haleem },

    // Tandoori/Sides
    { name: "Tandoori Roti", price: "₹12", category: "Tandoori/Sides", description: "Fresh baked tandoor bread", image: tandooriRoti },
    { name: "RUMALI ROTI", price: "₹10", category: "Tandoori/Sides", description: "Thin, soft Indian flatbread", image: rumaliRoti },
    { name: "Puri", price: "₹30", category: "Tandoori/Sides", description: "Deep fried crispy bread", image: pori },
    { name: "Aloo Samosa", price: "₹15", category: "Tandoori/Sides", description: "Crispy pastry with spiced potato filling", image: samosa },
    { name: "Khajoor", price: "₹15", category: "Tandoori/Sides", description: "Sweet date-based delicacy", image: khajoor },

    // Drinks
    { name: "Mineral Water", price: "₹10 & ₹20", category: "Drinks", description: "Fresh mineral water bottle", image: drinks },
    { name: "Cool Drink 200ml", price: "₹20", category: "Drinks", description: "Refreshing cold beverages", image: drinks },
    { name: "Tea", price: "₹20", category: "Drinks", description: "Traditional Indian masala chai", image: drinks },
  ];

  const filteredItems = selectedCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-warm-bg bg-gradient-to-b from-background to-secondary/20" ref={menuRef}>
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <motion.div 
          className="text-center mb-12" 
          data-aos="fade-up"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ opacity: headerOpacity }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Menu
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Authentic flavors from the heart of Hyderabad
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-8" 
          data-aos="fade-up" 
          data-aos-delay="100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {categories.map((category) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              data-aos="fade-up"
              whileHover={{ y: -10 }}
            >
              <Card className="shadow-card-shadow hover:shadow-glow-shadow transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <motion.div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </motion.div>
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <span className="text-lg font-semibold text-foreground">{item.name}</span>
                    <span className="text-xl font-bold text-primary">{item.price}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                  <span className="inline-block mt-2 px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {item.category}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        </AnimatePresence>

        {/* Order Options */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="200">
          <Card className="shadow-card-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-3">🛵</span>
                Order Online
              </h3>
              <div className="space-y-3">
                <Button 
                  asChild 
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                >
                  <a 
                    href="https://zomato.onelink.me/xqzv/xiaap9hc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    🍽️ Order on Zomato
                  </a>
                </Button>
                <Button 
                  asChild 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                >
                  <a 
                    href="https://www.swiggy.com/menu/661672?source=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    🛵 Order on Swiggy
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Call to Order</h3>
              <p className="text-muted-foreground mb-6">
                Contact us to place your order or make a reservation
              </p>
              <Button 
                asChild
                size="lg" 
                className="w-full"
              >
                <a href="tel:+919705707883">
                  Call Now: +91 9705707883
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Menu;