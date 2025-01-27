import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./ui/Footer";
import "react-image-gallery/styles/css/image-gallery.css"; // Import carousel styles
import ImageGallery from "react-image-gallery"; // Import React Image Gallery
import "../App.css";

const Portfolio = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Gallery images
  const images = [
    { src: "/1.png", caption: "Sculpture 1", modalCaption: "Full View of Sculpture 1" },
    { src: "/2.png", caption: "Sculpture 2", modalCaption: "Full View of Sculpture 2" },
    { src: "/3.png", caption: "Sculpture 3", modalCaption: "Full View of Sculpture 3" },
    { src: "/4.png", caption: "Sculpture 4", modalCaption: "Full View of Sculpture 4" },
    { src: "/5.png", caption: "Sculpture 5", modalCaption: "Full View of Sculpture 5" },
    { src: "/6.png", caption: "Sculpture 6", modalCaption: "Full View of Sculpture 6" },
    { src: "/4 -Copy.png", caption: "Sculpture 7", modalCaption: "Full View of Sculpture 7" },
    { src: "/8.png", caption: "Sculpture 8", modalCaption: "Full View of Sculpture 8" },
    { src: "/9.png", caption: "Sculpture 9", modalCaption: "Full View of Sculpture 9" },
    { src: "/10.png", caption: "Sculpture 10", modalCaption: "Full View of Sculpture 10" },
    { src: "/11.png", caption: "Sculpture 11", modalCaption: "Full View of Sculpture 11" },
    { src: "/12.png", caption: "Sculpture 12", modalCaption: "Full View of Sculpture 12" },
    { src: "/13.png", caption: "Sculpture 13", modalCaption: "Full View of Sculpture 13" },
    { src: "/14.png", caption: "Sculpture 14", modalCaption: "Full View of Sculpture 14" },
    { src: "/15.png", caption: "Sculpture 15", modalCaption: "Full View of Sculpture 15" },
    { src: "/16.png", caption: "Sculpture 16", modalCaption: "Full View of Sculpture 16" },
    { src: "/17.png", caption: "Sculpture 17", modalCaption: "Full View of Sculpture 17" },
    { src: "/18.png", caption: "Sculpture 18", modalCaption: "Full View of Sculpture 18" },
    { src: "/19.png", caption: "Sculpture 19", modalCaption: "Full View of Sculpture 19" },
    { src: "/20.png", caption: "Sculpture 20", modalCaption: "Full View of Sculpture 20" },
    { src: "/21.png", caption: "Sculpture 21", modalCaption: "Full View of Sculpture 21" },
    { src: "/22.png", caption: "Sculpture 22", modalCaption: "Full View of Sculpture 22" },
    { src: "/23.png", caption: "Sculpture 23", modalCaption: "Full View of Sculpture 23" },
    { src: "/24.png", caption: "Sculpture 24", modalCaption: "Full View of Sculpture 24" },
    { src: "/25.png", caption: "Sculpture 25", modalCaption: "Full View of Sculpture 25" },
    { src: "/26.png", caption: "Sculpture 26", modalCaption: "Full View of Sculpture 26" },
    { src: "/27.png", caption: "Sculpture 27", modalCaption: "Full View of Sculpture 27" },
    { src: "/28.png", caption: "Sculpture 28", modalCaption: "Full View of Sculpture 28" },
    { src: "/29.png", caption: "Sculpture 29", modalCaption: "Full View of Sculpture 29" },
    { src: "/30.png", caption: "Sculpture 30", modalCaption: "Full View of Sculpture 30" },
    { src: "/31.png", caption: "Sculpture 31", modalCaption: "Full View of Sculpture 31" },
    { src: "/32.png", caption: "Sculpture 32", modalCaption: "Full View of Sculpture 32" },
    { src: "/33.png", caption: "Sculpture 33", modalCaption: "Full View of Sculpture 33" },
    { src: "/34.png", caption: "Sculpture 34", modalCaption: "Full View of Sculpture 34" },
    { src: "/35.png", caption: "Sculpture 35", modalCaption: "Full View of Sculpture 35" },
    { src: "/36.png", caption: "Sculpture 36", modalCaption: "Full View of Sculpture 36" },
    { src: "/37.png", caption: "Sculpture 37", modalCaption: "Full View of Sculpture 37" },
    { src: "/38.png", caption: "Sculpture 38", modalCaption: "Full View of Sculpture 38" },
    { src: "/39.png", caption: "Sculpture 39", modalCaption: "Full View of Sculpture 39" },
     
  ];

  // Convert the images array into the format required by react-image-gallery
  const galleryImages = images.map((image) => ({
    original: image.src,
    thumbnail: image.src,
    description: image.caption, // Used by react-image-gallery for thumbnails
    modalCaption: image.modalCaption, // Separate caption for the modal
  }));

  const openImage = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  return (
    <div className="min-h-screen bg-white" id="Root-padding">
      <div className="max-w-9xl mx-auto">
        <Navbar />

        {/* Grid for images */}
        <div className="grid grid-cols-3 gap-1 p-2">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group fade-in w-full h-auto overflow-hidden"
              onClick={() => openImage(index)} // Attach onClick to the parent div
            >
              <div className="overflow-hidden shadow-lg relative cursor-pointer">
                <img
                  src={image.src}
                  alt={`Portfolio Image ${index + 1}`}
                  className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-110"
                />
                {/* Thumbnail Caption */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-white text-sm md:text-lg font-medium px-2 text-center">
                    {image.caption}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center z-50 p-4 sm:p-8">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-black p-4 md:p-6 rounded-full text-2xl md:text-4xl hover:scale-125 transform transition"
              onClick={closeModal}
            >
              ✖
            </button>

            {/* Carousel Component */}
            <div className="max-w-3xl w-full flex flex-col sm:max-w-4xl">
              <ImageGallery
                items={galleryImages}
                startIndex={selectedIndex}
                showFullscreenButton={false}
                showPlayButton={false}
                showThumbnails={false}
                onSlide={(currentIndex) => setSelectedIndex(currentIndex)}
              />

              {/* Modal Caption */}
              <p className="text-center text-sm md:text-lg font-medium bg-gray-100 w-full p-2">
                {galleryImages[selectedIndex]?.modalCaption}
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
