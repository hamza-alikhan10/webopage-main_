import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './ui/Footer';
import '../App.css';
interface ImageData {
  url: string;
  caption: string;
}

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

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
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
  <span
    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    style={{
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '1.2em',
      fontSize: '10px',
      textTransform: 'none',
      textDecoration: 'none',
      textAlign: 'center',
      letterSpacing: '.06em',
    }}
  >
    View Image
  </span>
</div>

              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl w-full">
              <img
                src={selectedImage.url}
                alt="Selected portfolio image"
                className="w-full h-auto"
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
