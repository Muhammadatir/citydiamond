import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import logo2 from "@/assets/logo 2.png";

const Navigation = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  
  // Animation variants
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1
      }
    }
  };
  
  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    }),
    hover: { 
      scale: 1.1,
      color: "#E63946",
      transition: { duration: 0.2 }
    }
  };
  
  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      y: -20,
      height: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: { 
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      className={`${scrolled ? 'bg-card/95' : 'bg-card/90'} backdrop-blur-sm border-b-4 border-gold sticky top-0 z-50`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 justify-between w-full">
          {/* Logo Left */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo2} alt="Hotel City Diamond Logo" className="w-12 h-12 rounded-full object-cover" />
              <span className="font-heading text-2xl text-traditional-red font-bold">Hotel City Diamond</span>
            </Link>
          </motion.div>

          {/* Navigation Center */}
          <div className="flex-1 flex justify-center">
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  custom={index}
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className={`text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Action Right */}
          <div className="hidden md:flex items-center">
            <motion.div
              custom={4}
              variants={linkVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://wa.me/919705707883"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-white font-semibold px-4 py-2 rounded-full shadow hover:bg-gold-light transition-colors"
              >
                Order on WhatsApp
              </a>
            </motion.div>
          </div>

          <div className="md:hidden">
            <motion.div
              whileTap={{ scale: 0.9 }}
            >
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-card shadow-lg rounded-b-lg mt-2 overflow-hidden absolute left-0 right-0 px-6"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="py-4 space-y-4 flex flex-col">
              {navItems.map((item, index) => (
                <motion.div 
                  key={item.path}
                  variants={linkVariants} 
                  custom={index} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to={item.path} 
                    className={`block py-2 ${location.pathname === item.path ? "text-primary" : "text-muted-foreground"} hover:text-primary`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div variants={linkVariants} custom={4} whileHover={{ scale: 1.05 }}>
                <a
                  href="https://wa.me/919705707883"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gold hover:bg-gold-light text-white px-4 py-2 rounded-full transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Order on WhatsApp
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;