import { MessageCircle, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import '../App.css';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "Thank you for Contacting Us",
    });
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919876543210', '_blank');
  };

  const handleMapClick = () => {
    const address = encodeURIComponent("Block A, Sector 43, Noida, Uttar Pradesh 201303");
    window.open(`https://www.google.com/maps?q=${address}`, '_blank');
  };

  return (
    <div className="relative w-full min-h-screen bg-beige" id="Root-padding">
      <Navbar/>
      
      {/* Contact Form Section */}
      <div className="max-w-5xl mx-auto px-4 py-16 text-center border border-[#FDE1D3] my-5 bg-[#F5F5F5]">
        <h2 className="text-lg mb-1 font-montserrat">Your masterpiece starts here. Connect with us to get started!</h2>
        
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-3xl mx-auto mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="text"
              name="firstName"
              placeholder="Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <Textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="min-h-[150px] resize-none"
            required
          />
          
          <Button 
            type="submit"
            className="bg-black text-white hover:bg-gray-800 px-8 w-full md:w-auto md:self-center"
          >
            SUBMIT
          </Button>
        </form>
      </div>

      {/* Contact Details Section */}
       <div className="max-w-5xl mx-auto px-4 py-8 bg-[#F5F5F5] border border-[#FDE1D3] mb-8 min-h-[400px]">
       <h2 className="text-lg mb-8 font-montserrat text-center">
          Luxury is just a phone call away!
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
          <div className="space-y-8">
            {/* Phone Section */}
            <div className="flex flex-col items-center md:items-start space-y-2">
              <div className="flex items-center gap-3 hover:text-gray-600 transition-colors">
                <Phone className="w-6 h-6" />
                <span className="text-lg">+91 987 654 3210</span>
              </div>
            </div>

            {/* WhatsApp Section */}
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-3 hover:text-gray-600 transition-colors group w-full md:w-auto justify-center md:justify-start"
            >
              <MessageCircle className="w-6 h-6 group-hover:text-green-600 transition-colors" />
              <span className="text-lg"> +91 987 654 3210</span>
            </button>
            
            {/* Address Section */}
            <button
              onClick={handleMapClick}
              className="flex flex-col items-center md:items-start gap-2 hover:text-gray-600 transition-colors text-center md:text-left w-full"
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 flex-shrink-0" />
                <span className="text-lg">
                  Block A, Sector 43,<br className="hidden md:block" />
                  Noida, Uttar Pradesh 201303
                </span>
              </div>
            </button>
          </div>
          
          <div className="h-[300px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.2536740831087!2d77.32431931507878!3d28.583192982437365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f84f08c457%3A0x397cb919f4496d24!2sSector%2043%2C%20Noida%2C%20Uttar%20Pradesh%20201303!5e0!3m2!1sen!2sin!4v1645518745678!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 1 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto text-center relative flex items-center justify-center overflow-clip">
        <img 
          src="./DON5.jpg" 
          alt="Studio" 
          className="aspect-[3100/2000] object-cover object-center opacity-100 w-full"
        />
      </div>
      <Footer/> 
    </div>
  );
};

export default Contact;