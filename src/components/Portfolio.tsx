import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./ui/Footer";
import "react-image-gallery/styles/css/image-gallery.css"; // Import carousel styles
import ImageGallery from "react-image-gallery"; // Import React Image Gallery
import "../App.css";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Sculptures");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Image categories
  const categories = {
    Sculptures: [
      "/1.png",
      "/2.png",
      "/3.png",
     "/4.png",
     "/5.png",
     "/6.png",
     "/4 -Copy.png",
    "/8.png",
    "/9.png",
    "/10.png",
    "/11.png",
   "/12.png",
   "/13.png",
   "/14.png",
   "/15.png",
  "/16.png",
  "/17.png",
  "/18.png",
  "/19.png",
 "/20.png",
 "/21.png",
 "/22.png",
"/23.png",
"/24.png",
"/25.png",
"/26.png",
"/27.png",
"/28.png",
"/29.png",
"/30.png",
"/31.png",
"/32.png",
"/33.png",
"/34.png",
"/35.png",
"/36.png",
"/37.png",
"/38.png",
"/39.png",
    ],
    "Wall Installations": [
     
      "/Stallion.png",
    ],
    "Public Art": [
      "/KPMG- Mumbai.jpeg",
      "/F5_Hyderdbd_curos.jpeg",
      "/wolf_mithila parkr.JPG",
      "/ballerina.jpg",
    ],
  };

  // Get images for the selected category
  const images = categories[selectedCategory] || [];

  // Convert the images array into the format required by react-image-gallery
  const galleryImages = images.map((image) => ({
    original: image,
    thumbnail: image,
  }));

  const openImage = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  return (
    <div className="min-h-screen bg-white" id="Root-padding">
      <div className="max-w-9xl mx-auto">
        <Navbar />

        {/* Header */}
        <div
          className="header-container flex justify-center space-x-8 my-1"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "20px",
            fontWeight: "500",
           
          }}
        >
          {Object.keys(categories).map((category) => (
            <span
              key={category}
              className={`header-item cursor-pointer ${
                selectedCategory === category ? "underline font-bold" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </span>
          ))}
        </div>

        {/* Grid for images */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-1">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group fade-in w-full h-5 pb-[133%] overflow-hidden"
            >
              <div className="overflow-hidden shadow-lg">
                <img
                  src={image}
                  alt={`Portfolio Image ${index + 1}`}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                  onClick={() => openImage(index)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50 p-4">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-black p-6 rounded-full text-4xl hover:scale-125 transform transition"
              style={{
                width: "60px",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: "0",
              }}
              onClick={closeModal}
            >
              ✖
            </button>

            {/* Carousel Component */}
            <div className="max-w-4xl w-full">
              <ImageGallery
                items={galleryImages}
                startIndex={selectedIndex}
                showFullscreenButton={false}
                showPlayButton={false}
                useTranslate3D={false}
                showThumbnails={true}
                onSlide={(currentIndex) => setSelectedIndex(currentIndex)}
              />
            </div>
          </div>
        )}
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Portfolio;
