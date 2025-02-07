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
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "Thank you for contacting us!",
    });
    setFormData({ firstName: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppClick = () => window.open('https://wa.me/919876543210', '_blank');
  const handleMapClick = () => {
    const address = encodeURIComponent("Block A, Sector 43, Noida, Uttar Pradesh 201303");
    window.open(`https://www.google.com/maps?q=${address}`, '_blank');
  };

  return (
    <div className="w-full min-h-screen bg-beige" id="Root-padding">
      <Navbar />

      {/* Contact Section */}
      <div className="container mx-auto  ">
        {/* Contact Form */}
        <div className="bg-[#F5F5F5] border border-[#FDE1D3] md:p-16 sm:p-10 py-8 px-5">
          <h3 className="sm:text-xl sm:font-semibold text-lg mb-10   text-center">Connect with us to get started!</h3>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-2 md:space-y-6 max-w-3xl mx-auto">
            <Input
              type="text"
              name="firstName"
              placeholder="Name"
              className="placeholder:text-sm sm:placeholder:text-[15px]"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              className="placeholder:text-sm sm:placeholder:text-[15px]"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="resize-none pb-10"
            />
            <Button
              type="submit"
              className="bg-black text-white hover:bg-gray-800 px-8 mx-auto"
            >
              SUBMIT
            </Button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-[#F5F5F5] border border-[#FDE1D3] px-[9%] py-[9%] mt-5">
          <h3 className="sm:text-xl sm:font-semibold text-lg mb-8  text-left justify-center ml-3 sm:ml-0">Luxury is just a phone call away!</h3>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex space-x-2 items-center hover:text-gray-600">
                <Phone className="w-6 h-6" />
                <span className="sm:text-lg text-base">+91 987 654 3210</span>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="flex space-x-2 bg-gray-100 items-center hover:text-gray-600"
              >
                <MessageCircle className="w-6 h-6 text-green-600" />
                <span className="sm:text-lg text-base">+91 987 654 3210</span>
              </button>
              <button
                onClick={handleMapClick}
                className="flex space-x-2 items-center bg-gray-100 hover:text-gray-600 text-left"
              >
                <MapPin className="w-6 h-6" />
                <span className="sm:text-lg text-base">
                  Block A, Sector 43,<br />Noida, Uttar Pradesh 201303
                </span>
              </button>
            </div>

            {/* Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.273330255157!2d77.3510594!3d28.5603705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d77912a873%3A0x661b4fe105c22633!2sFormforge!5e0!3m2!1sen!2sin!4v1695551234567!5m2!1sen!2sin"
              className="w-full h-64 rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="container mt-5 ">
        <img
          src="./DON5.jpg"
          alt="Studio"
          className="w-full object-cover rounded-lg"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
