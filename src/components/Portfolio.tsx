import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./ui/Footer";
import "react-image-gallery/styles/css/image-gallery.css"; // Import carousel styles
import ImageGallery from "react-image-gallery"; // Import React Image Gallery
import "../App.css";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Sculptures");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Image categories with captions
  const categories = {
    Sculptures: [
      { src: "/1.png", caption: "Sculpture 1" },
      { src: "/2.png", caption: "Sculpture 2" },
      { src: "/3.png", caption: "Sculpture 3" },
      { src: "/4.png", caption: "Sculpture 4" },
      { src: "/5.png", caption: "Sculpture 5" },
      { src: "/6.png", caption: "Sculpture 6" },
      { src: "/4 -Copy.png", caption: "Sculpture 7" },
      { src: "/8.png", caption: "Sculpture 8" },
      { src: "/9.png", caption: "Sculpture 9" },
      { src: "/10.png", caption: "Sculpture 10" },
      { src: "/11.png", caption: "Sculpture 11" },
      { src: "/12.png", caption: "Sculpture 12" },
      { src: "/13.png", caption: "Sculpture 13" },
      { src: "/14.png", caption: "Sculpture 14" },
      { src: "/15.png", caption: "Sculpture 15" },
      { src: "/16.png", caption: "Sculpture 16" },
      { src: "/17.png", caption: "Sculpture 17" },
      { src: "/18.png", caption: "Sculpture 18" },
      { src: "/19.png", caption: "Sculpture 19" },
      { src: "/20.png", caption: "Sculpture 20" },
      { src: "/21.png", caption: "Sculpture 21" },
      { src: "/22.png", caption: "Sculpture 22" },
      { src: "/23.png", caption: "Sculpture 23" },
      { src: "/24.png", caption: "Sculpture 24" },
      { src: "/25.png", caption: "Sculpture 25" },
      { src: "/26.png", caption: "Sculpture 26" },
      { src: "/27.png", caption: "Sculpture 27" },
      { src: "/28.png", caption: "Sculpture 28" },
      { src: "/29.png", caption: "Sculpture 29" },
      { src: "/30.png", caption: "Sculpture 30" },
      { src: "/31.png", caption: "Sculpture 31" },
      { src: "/32.png", caption: "Sculpture 32" },
      { src: "/33.png", caption: "Sculpture 33" },
      { src: "/34.png", caption: "Sculpture 34" },
      { src: "/35.png", caption: "Sculpture 35" },
      { src: "/36.png", caption: "Sculpture 36" },
      { src: "/37.png", caption: "Sculpture 37" },
      { src: "/38.png", caption: "Sculpture 38" },
      { src: "/39.png", caption: "Sculpture 39" },
    ],
    "Wall Installations": [
      { src: "/Stallion.png", caption: "Stallion Installation" },
    ],
    "Public Art": [
      { src: "/F5_Hyderdbd_curos.jpeg", caption: "Public Art Display" },
    ],
  };

  // Get images for the selected category
  const images = categories[selectedCategory] || [];

  // Convert the images array into the format required by react-image-gallery
  const galleryImages = images.map((image) => ({
    original: image.src,
    thumbnail: image.src,
    caption: image.caption,
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
                  src={image.src}
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
          <div className="fixed inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center z-50 p-4">
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
            <div className="max-w-4xl w-full flex flex-col">
              <ImageGallery
                items={galleryImages}
                startIndex={selectedIndex}
                showFullscreenButton={false}
                showPlayButton={false}
                showThumbnails={false}
                onSlide={(currentIndex) => setSelectedIndex(currentIndex)}
              />

              {/* Caption */}
              <p className="text-center text-lg font-medium bg-gray-100 w-full p-2">
                {galleryImages[selectedIndex]?.caption}
              </p>
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
