import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, amount: 0.3 });
  const isInfoInView = useInView(infoRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <motion.div
      className="min-h-screen bg-warm-bg bg-gradient-to-b from-background to-secondary/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />

      <motion.div 
        className="max-w-6xl mx-auto px-4 py-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We'd love to hear from you. Get in touch with us!
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {/* Contact Form */}
          <motion.div
            ref={formRef}
            variants={containerVariants}
            initial="hidden"
            animate={isFormInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <Card className="shadow-card-shadow">
                <CardHeader>
                  <motion.div variants={itemVariants}>
                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  </motion.div>
                </CardHeader>
                <CardContent>
                  <motion.form 
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    variants={containerVariants}
                  >
                    <motion.div variants={itemVariants}>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="mt-1"
                        placeholder="Tell us about your inquiry, reservation request, or feedback..."
                      />
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button type="submit" className="w-full" size="lg">
                        Send Message
                      </Button>
                    </motion.div>
                  </motion.form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="space-y-6"
            ref={infoRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInfoInView ? "visible" : "hidden"}
          >
            <Card className="shadow-card-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="mr-3">📍</span>
                  Location
                </h3>
                <p className="text-muted-foreground mb-4">
                  Hotel City Diamond<br />
                  9CMX+895, Huda Colony, Asif Nagar<br />
                  Hyderabad, Telangana 500264
                </p>
                <div className="bg-muted/30 rounded-lg p-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160823939!2d78.24323142498967!3d17.41261482777914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1653373986567!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                    title="Hotel City Diamond Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="mr-3">📞</span>
                  Contact Details
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+919705707883" className="text-primary font-semibold hover:underline">
                      +91 9705707883
                    </a>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@hotelcitydiamond.com" className="text-primary hover:underline">
                      info@hotelcitydiamond.com
                    </a>
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <a href="https://wa.me/919705707883" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      +91 9705707883
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="mr-3">🕒</span>
                  Operating Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Sunday</span>
                    <span className="font-medium">7:00 AM - 11:00 PM</span>
                  </div>
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                    <p className="text-sm text-primary font-medium">
                      🍽️ Open Every Day - Dine-in, Takeaway & Home Delivery Available
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
