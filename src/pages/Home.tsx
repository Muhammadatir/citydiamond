import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import heroBiryani from "@/assets/hero-biryani.jpg";
import rice from "@/assets/rice.png";
import { motion, useScroll, useTransform } from "framer-motion";
import haleem from "@/assets/Haleem.png";
import chicken65 from "@/assets/65.png";
import muttonKheema from "@/assets/Mutton Kheema.png";
import muttonMasala from "@/assets/mutton-masala.jpg";
import { useRef } from "react";

const Home = () => {
  // Parallax effect for hero section
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  return (
    <motion.div 
      className="min-h-screen bg-warm-bg bg-gradient-to-b from-background to-secondary/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${rice})`,
            y: heroY,
            opacity: heroOpacity
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </motion.div>
        <motion.div
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 font-heading text-white drop-shadow-lg">
                Authentic Hyderabadi Biryani, Haleem & More
              </h1>
              <p className="text-2xl md:text-3xl mb-8 font-semibold text-white drop-shadow-lg">
                ₹400 for Two | Family Packs Available
              </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/menu">
                <Button variant="hero" size="lg" className="px-8 py-6 text-lg font-semibold bg-gold text-white hover:bg-gold-light">
                  View Menu
                </Button>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://wa.me/919705707883"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-6 text-lg font-semibold bg-green-600 hover:bg-green-700 rounded-full shadow transition-colors inline-block"
              >
                Order on WhatsApp
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>
          {/* Why Choose Us Section */}
          <section className="bg-background py-12">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Why Choose Us</h2>
              <p className="text-center text-muted-foreground mb-8">Experience the authentic taste of Hyderabadi cuisine</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-sm p-6 border flex flex-col items-center">
                  <span className="text-3xl mb-2">🍛</span>
                  <h3 className="font-semibold mb-1">Authentic Biryani</h3>
                  <p className="text-sm text-muted-foreground text-center">Traditional Hyderabadi Dum Biryani cooked with aromatic spices and tender meat</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6 border flex flex-col items-center">
                  <span className="text-3xl mb-2">⭐</span>
                  <h3 className="font-semibold mb-1">20 Years Experience</h3>
                  <p className="text-sm text-muted-foreground text-center">Two decades of serving the finest quality food with consistent taste</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6 border flex flex-col items-center">
                  <span className="text-3xl mb-2">🌟</span>
                  <h3 className="font-semibold mb-1">Quality Service</h3>
                  <p className="text-sm text-muted-foreground text-center">Exceptional service and hospitality that keeps our customers coming back</p>
                </div>
              </div>
            </div>
          </section>
      {/* ...rest of homepage sections... */}
    </motion.div>
  );
};

export default Home;