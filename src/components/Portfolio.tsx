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
    { url: '/sad_pose.jpg', caption: 'Sad Pose' },
    { url: '/butterfly.jpg', caption: 'Butterfly' },
    { url: '/nandi_pune.jpg', caption: 'Nandi Pune' },
    { url: '/ragging_stallions.jpg', caption: 'Raging Stallions' },
    { url: '/swirl.jpg', caption: 'Swirl' },
    { url: '/Stallion.png', caption: 'Stallion' },
    { url: '/sad_pose.jpg', caption: 'Another Sad Pose' },
    { url: '/satyamv_jayte.jpg', caption: 'Satyameva Jayate' },
    { url: '/KPMG- Mumbai.jpeg', caption: 'KPMG Mumbai' },
    { url: '/F5_Hyderdbd_curos.jpeg', caption: 'F5 Hyderabad' },
    { url: '/wolf_mithila parkr.JPG', caption: 'Wolf at Mithila Park' },
    { url: '/ballerina.jpg', caption: 'Ballerina' },
    { url: '/nandi_pune.jpg', caption: 'Nandi in Pune Again' },
    { url: '/reception_tble.jpg', caption: 'Reception Table' },
    { url: '/KPMG- Mumbai.jpeg', caption: 'KPMG Office' },
    { url: '/ant_hill.jpg', caption: 'Ant Hill' },
    { url: '/nandi_pune.jpg', caption: 'Nandi Third View' },
    { url: '/reception_tble.jpg', caption: 'Another Reception Table' },
    { url: '/leaning man 2.jpg', caption: 'Leaning Man 2' },
    { url: '/shivrj_maharaj.jpg', caption: 'Shivraj Maharaj' },
    { url: '/sad_pose.jpg', caption: 'Sad Pose Redux' },
    { url: '/satyamv_jayte.jpg', caption: 'Another Satyameva Jayate' },
    { url: '/reception_tble.jpg', caption: 'Third Reception Table' },
    { url: '/shivrj_maharaj.jpg', caption: 'Shivraj Maharaj Close-Up' },
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
                  src={image.url}
                  alt={`Portfolio Image ${index + 1}`}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                  onClick={() => setSelectedImage(image)}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <span
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 300,
                      fontStyle: 'normal',
                      lineHeight: '1.2em',
                      fontSize: '19px',
                      textTransform: 'none',
                      textDecoration: 'none',
                      textAlign: 'center',
                      letterSpacing: '.06em',
                      border:'10px'
                    }}
                  >
                    {image.caption}
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
