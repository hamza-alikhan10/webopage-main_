import { useState, useEffect } from "react";
import Footer from "@/components/ui/Footer";
import '../App.css';

const images = [
  '/don2.webp',
  '/VIGHNAHARTA.webp',
  '/NANDI.webp',
  '/Solemn-banner.webp',  
  '/Arise_ Pushpanjali Farmhouse- Delhi.JPG',  
  '/DIVE.webp',
  '/urban.png',
  '/BUDDHA.png',
  '/don3.webp',
  '/don4.webp',
  '/About-Us.png',
  '/THE-GRAND-PIANO.png',
  '/LA-BELLA.png',
  '/SATYAMEV-JAYATE.png',
  '/Twin-Spirits.jpeg',
  '/oronoir.png',
  '/don1.webp',
  '/urban.png',
  '/About-Us.png',
  '/urban.png',
  '/About-Us.png',
  "/Sap_soma.png"
];

const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length); // Changes image every 5 seconds
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
            transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
            opacity: currentImage === index ? 1 : 0,
            transform: currentImage === index ? 'scale(1)' : 'scale(1.1)',
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

        {/* Footer within the image */}
        <div className="mt-16 w-full text-white text-center py-4 border-none m-0">
  <Footer />
</div>
      </div>
    </div>
  );
};

export default Index;
