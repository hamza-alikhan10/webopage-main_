import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./ui/Footer";
import "react-image-gallery/styles/css/image-gallery.css"; // Import carousel styles
import ImageGallery from "react-image-gallery"; // Import React Image Gallery
import "../App.css";

const Portfolio = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    // 1
    "/passi_butterfly.png", 
    "/port-horses.png", 
    "/Diya_mirza.png", 

    "/sad_pose.jpg",
"/caterpillr.JPG",
"/Camel-1.jpg",
 // 2
    "/Bust of man-1.jpg",
    "/PANTHERA.jpeg",
    "/Falcon.jpg",
 // 3
    "/sad_pose.jpg",
    "/Performer-2.png",
    
   // 4
   "/port-david.png",
    "/Tata.png",
    "/Stallion.png",
 // 5
    "/Sitting_figuree.jpg",
    "/Sitting_figure.jpg",
    "/butterfly.jpg",
     // 6
    "/ragging_stallions.jpg",
    "/swirl.jpg",
    "/Stallion.png",
 // 7
    "/sad_pose.jpg",
    "/KPMG- Mumbai.jpeg",
    "/F5_Hyderdbd_curos.jpeg",
     // 8
    "/wolf_mithila parkr.JPG",
    "/ballerina.jpg",
    "/DAVID-2.png",
 // 9
    "/KPMG- Mumbai.jpeg",
    "/ant_hill.jpg",
    "/leaning man 2.jpg",
     // 10
    "/reception_tble.jpg",
    "/shivrj_maharaj.jpg",
  ];

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
    height: "60px", // Ensure button is square
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: "0", // Center the icon perfectly
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
                showThumbnails={false}
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
