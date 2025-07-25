import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef(null);
  
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };
  
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  return (
    <motion.div 
      className="min-h-screen bg-warm-bg bg-gradient-to-b from-background to-secondary/20 relative" 
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Title and subtitle */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-foreground mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            About Hotel City Diamond
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            A legacy of authentic flavors and exceptional service
          </motion.p>
        </motion.div>

        {/* Our Story */}
        <motion.div 
          className="bg-background rounded-lg shadow-sm p-6 mb-8 border"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-2">Our Story</h2>
          <p className="text-base text-muted-foreground">
            For over two decades, Hotel City Diamond has been a cornerstone of authentic Hyderabadi cuisine. Established with a passion for preserving the rich culinary traditions of Hyderabad, we have dedicated ourselves to serving the finest Dum Biryani, Mughlai delicacies, and a diverse range of Indian and Chinese dishes.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div className="bg-background rounded-lg shadow-sm p-6 border flex flex-col items-start" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <span className="text-3xl mb-2">👨‍🍳</span>
            <h3 className="font-semibold mb-1">Master Chefs</h3>
            <p className="text-sm text-muted-foreground">Our experienced chefs bring authentic recipes passed down through generations, ensuring every dish maintains its traditional taste and aroma.</p>
          </motion.div>
          <motion.div className="bg-background rounded-lg shadow-sm p-6 border flex flex-col items-start" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <span className="text-3xl mb-2">🌾</span>
            <h3 className="font-semibold mb-1">Premium Ingredients</h3>
            <p className="text-sm text-muted-foreground">We source only the finest ingredients, from aromatic basmati rice to carefully selected spices, ensuring the highest quality in every dish we serve.</p>
          </motion.div>
          <motion.div className="bg-background rounded-lg shadow-sm p-6 border flex flex-col items-start" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <span className="text-3xl mb-2">🏆</span>
            <h3 className="font-semibold mb-1">Quality Commitment</h3>
            <p className="text-sm text-muted-foreground">Every dish is prepared with meticulous attention to detail, maintaining consistent quality and taste that has earned us loyal customers over the years.</p>
          </motion.div>
          <motion.div className="bg-background rounded-lg shadow-sm p-6 border flex flex-col items-start" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <span className="text-3xl mb-2">❤️</span>
            <h3 className="font-semibold mb-1">Family Values</h3>
            <p className="text-sm text-muted-foreground">We treat every customer as family, providing warm hospitality and personalized service that makes every dining experience memorable.</p>
          </motion.div>
        </div>

        {/* Our Mission */}
        <motion.div className="bg-background rounded-lg shadow-sm p-6 mb-8 border text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-base text-muted-foreground">
            To continue serving authentic Hyderabadi cuisine while maintaining the highest standards of quality, taste, and service. We strive to preserve culinary traditions while creating new memories for our guests, one meal at a time.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-4">
          <div className="text-center">
            <span className="text-2xl font-bold text-primary">20+</span>
            <div className="text-sm text-muted-foreground">Years of Service</div>
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold text-primary">10,000+</span>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold text-primary">50+</span>
            <div className="text-sm text-muted-foreground">Menu Items</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;