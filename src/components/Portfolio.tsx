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
    { src: "/1.png", caption: <>Twin spirits<br />(Chennai) IND, 2023</> },
    { src: "/2.png", caption: <>The Metamorphosis Muse,<br />(Hyderabad) IND, 2025</> },
    { src: "/3.png", caption: <>Vighnaharta <br />(Mumbai) IND, 2022</> },
    { src: "/4.png", caption: <>David<br />(Casamia UAE) 2021</> },
    { src: "/5.png", caption: <>The Lotus Nouvel<br />(Pune) IND, 2020</> },
    { src: "/6.png", caption: <>Mermaid | Oh’ll’nam<br />(Vadodara) IND, 2022</> },
    { src: "/7.png", caption: <>Levitating Whale, KPMG, <br />(Gurugram) IND, 2022</> },
    { src: "/8.png", caption: <>The tree of life<br />(Delhi) IND, 2025</> },
    { src: "/9.png", caption: <>Inverted Cactus<br />(Hyderabad) IND, 2023</> },
    { src: "/10.png", caption: <>Sculptural totems<br />(Hyderabad) IND, 2025</> },
    { src: "/11.png", caption: <>The Raging Stallions<br />(Chennai) IND, 2021</> },
    { src: "/12.png", caption: <>The Wing Man<br />DXB UAE, 2024</> },
    { src: "/13.png", caption: <>The Sole Gaze<br />(Bangalore) IND, 2023</> },
    { src: "/14.png", caption: <>The Leaning Man<br />(Hyderabad) IND, 2023</> },
    { src: "/15.png", caption: <>The Meditating Lady<br />(Goa) IND, 2018</> },
    { src: "/16.png", caption: <>Etherea<br />(Chennai) IND, 2019</> },
    { src: "/17.png", caption: <>Bonsai<br />(Delhi) IND, 2024</> },
    { src: "/18.png", caption: <>Nandi<br />(Pune) IND, 2020</> },
    { src: "/19.png", caption: <>The Carefree Seat<br />(Hyderabad) IND, 2022</> },
    { src: "/20.png", caption: <>Bloom<br />(Delhi) IND, 2021</> },
    { src: "/21.png", caption: <>Reflective Pause<br />(Bangalore) IND, 2025</> },
    { src: "/22.png", caption: <>Abstracta<br />(Delhi), IND, 2021</> },
    { src: "/23.png", caption: <>Buddha<br />(Bangalore) IND, 2023</> },
    { src: "/24.png", caption: <>The Sleeping Lotus<br />(Delhi) IND, 2021</> },
    { src: "/25.png", caption: <>Raging Bull<br />(Goa) IND, 2024</> },
    { src: "/26.png", caption: <>The Raging Stallions<br />(Chennai) IND, 2021</>  },
    { src: "/27.png", caption: <>Panthera<br />DXB UAE, 2020</> },
    { src: "/28.png", caption: <>Aphrodia<br />(Goa) IND, 2018</> },
    { src: "/29.png", caption: <>Geomorph<br />(Hyderabad) IND, 2023</> },
    { src: "/30.png", caption: <>Ballerina<br />(Gurugram) IND, 2023</> },
    { src: "/31.png", caption: <>The Soul Gaze<br />(Banglore) IND, 2022</> },
    { src: "/32.png", caption: <>Solemn<br />(Mumbai) IND, 2021</> },
    { src: "/33.png", caption: <>A Quite Gaze<br />(Oman) UAE, 2024</> },
    { src: "/34.png", caption: <>The Wing Sculpture<br /> (Gurugram) IND, 2022</> },
    { src: "/35.png", caption: <>Dreaming Of Dharma<br />(Noida) IND, 2024</> },
    { src: "/36.png", caption: <>Skyward Bound<br />(Delhi) IND, 2024</> },
    { src: "/37.png", caption: <>Seed<br />(Mumbai) IND, 2024</> },
    { src: "/38.png", caption: <>Raging Bull<br />(Goa) IND, 2024</> },
    { src: "/39.png", caption: <>Ganapati<br />DXB UAE, 2024</> },
  ];

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
