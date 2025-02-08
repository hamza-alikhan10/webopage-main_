import { useState, useEffect } from "react";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const images = [
  "/H-L-1.jpg",
  "/H-L-2.jpg",
  "/H-L-3.jpg",
  "/H-L-4.jpg",
  "/H-L-5.jpg",
  "/H-L-6.jpg",
];

const socialLinks = [
  { href: "https://whatsapp.com", icon: <FaWhatsapp /> },
  { href: "https://instagram.com", icon: <FaInstagram /> },
  { href: "https://facebook.com", icon: <FaFacebook /> },
  { href: "https://linkedin.com", icon: <FaLinkedin /> },
];

const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.fontFamily = '"Montserrat","Poppins", sans-serif';
    document.body.style.backgroundColor = "#000";
    document.body.style.overflow = "hidden";
  
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
  
    return () => {
      // Cleanup styles
      document.body.style.margin = "";
      document.body.style.fontFamily = "";
      document.body.style.backgroundColor = "";
      document.body.style.overflow = "";
  
      // Clear the interval properly
      clearInterval(timer);
    };
  }, []);
  


  return (
    <div  className="w-full h-svh overflow-hidden flex item-centers justify-center relative bg-black">
      {/* Fullscreen Image Carousel */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`
            absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out
            ${currentImage === index ? "opacity-100 animate-fadeIn" : "opacity-0 animate-fadeOut"}
          `}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}

      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center h-auto w-auto relative z-10">
      <div className="">
        <h1 className="font-bold text-white  md:text-7xl text-4xl">
          F O R M F O R G E
        </h1>
        <button
          onClick={() => (window.location.href = "/gallery")}
          className="mt-[5vh] font-light border border-white text-white tracking-[5px] px-[30px] py-[10px] transition-all duration-300 ease-in-out rounded-full hover:bg-white hover:text-black hover:scale-105 hover:shadow-[0px_4px_15px_rgba(255,255,255,0.3)]"
        >
          ENTER
        </button>
      </div>
              {/* Social Media Icons */}
              <div className="mt-[8vh] flex justify-center absolute bottom-5 space-x-5 md:space-x-4">
        {socialLinks.map((link, index) => (
        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
          <span className="text-[4vw] md:text-2xl text-white transition-transform duration-300 ease-in-out hover:scale-125 hover:text-[#4b4948]">
            {link.icon}
          </span>
        </a>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Index;
