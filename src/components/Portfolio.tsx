import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './ui/Footer';
import '../App.css';

const Portfolio = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    '/sad_pose.jpg',
    '/butterfly.jpg',
    '/nandi_pune.jpg',
    '/ragging_stallions.jpg',
    '/swirl.jpg',
    '/Stallion.png',
    '/sad_pose.jpg',
    '/satyamv_jayte.jpg',
    '/KPMG- Mumbai.jpeg',
    '/F5_Hyderdbd_curos.jpeg',
    '/wolf_mithila parkr.JPG',
    '/ballerina.jpg',
    '/nandi_pune.jpg',
    '/reception_tble.jpg',
    '/KPMG- Mumbai.jpeg',
    '/ant_hill.jpg',
    '/nandi_pune.jpg',
    '/reception_tble.jpg',
    '/leaning man 2.jpg',
    '/shivrj_maharaj.jpg',
    '/sad_pose.jpg',
    '/satyamv_jayte.jpg',
    '/reception_tble.jpg',
    '/shivrj_maharaj.jpg',
  ];

  const openImage = (index: number) => setSelectedIndex(index);

  const closeModal = () => setSelectedIndex(null);

  const showNextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const showPreviousImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="min-h-screen bg-white" id="Root-padding">
      <div className="max-w-9xl mx-auto">
        <Navbar />

        {/* Grid for images */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-1">
          {images.map((image, index) => (
            <div key={index} className="relative group fade-in w-full h-5 pb-[140%] overflow-hidden">
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
          <div
            className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50 p-4"
          >
            <button
              className="absolute top-4 right-4 bg-black text-white p-2 rounded-md"
              onClick={closeModal}
            >
              Back
            </button>
            <div className="max-w-4xl w-full flex items-center justify-center">
              <button
                className="absolute left-4 text-black bg-white p-2 rounded-full"
                onClick={showPreviousImage}
              >
                &#8592;
              </button>
              <img
                src={images[selectedIndex]}
                alt={`Portfolio Image ${selectedIndex + 1}`}
                className="w-auto h-auto max-h-screen max-w-full"
              />
              <button
                className="absolute right-4 text-black bg-white p-2 rounded-full"
                onClick={showNextImage}
              >
                &#8594;
              </button>
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
