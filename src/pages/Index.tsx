import { useState, useEffect } from "react";
import { Linkedin, Instagram } from "lucide-react";

const images = [
  '/About-Us.png',
  '/don1.webp',
  '/don2.webp',
  '/don3.webp',
  '/don4.webp',
  '/sad_pose.jpg',
  '/About-Us.png',
  '/sad_pose.jpg',
  '/About-Us.png',
  "/Sap_soma.png"
];

const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length); // Changes image every 3 seconds
    }, 5000);

    return () => clearInterval(timer); // Cleanup timer
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden', position: 'relative' }}>
      {/* Fullscreen image carousel */}
      {images.map((src, index) => (
        <div
          key={index}
          className={currentImage === index ? "current-slide zoom-in" : "inactive-slide"}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'opacity 1s ease-in-out, transform 1s ease-in-out', // Add transition for zoom effect
            opacity: currentImage === index ? 1 : 0, // Show active slide
            transform: currentImage === index ? 'scale(1)' : 'scale(1.1)', // Zoom effect on active image
          }}
        />
      ))}

      {/* Centered text overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="text-white font-[Poppins] text-[110px] font-medium leading-[110px] tracking-[-1.1px] text-center uppercase">
          FORMFORGE
        </h1>
        <button
          onClick={() => window.location.href = '/portfolio'}
          className="mt-8 border-2 border-white text-white cursor-pointer font-['futura-pt'] text-[14px] font-medium tracking-[2.8px] leading-[14px] px-[20px] py-[14px] uppercase transition-all duration-300 hover:bg-white hover:text-black"
        >
          ENTER
        </button>
      </div>

      {/* Transparent Footer */}
      <footer className="absolute bottom-0 left-0 w-full z-10 flex items-center justify-center gap-6 py-4">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-75">
          <Linkedin size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-75">
          <Instagram size={24} />
        </a>
      </footer>
    </div>
  );
};

export default Index;
