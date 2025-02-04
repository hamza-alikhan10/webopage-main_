import React from 'react';
import Footer from './ui/Footer';
import Navbar from './Navbar';
import '../App.css';

interface BiographyProps {
  mainImage: string;
  secondaryImage: string;
  biography: string;
  artistStory: string;
}

const Biography: React.FC<BiographyProps> = ({
  mainImage,
  secondaryImage,
  biography,
  artistStory,
}) => {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-12" id="Root-padding">
      <Navbar />

      <div className="grid grid-cols-2 md:grid-cols-2 gap-8 mb-12">
        <div className="flex flex-col justify-center">
          <h1
            className="text-left"
            style={{
              fontFamily: 'Montserrat',
              fontWeight: 200,
              lineHeight: '1.5em',
              fontSize: '2em',
              letterSpacing: '.06em',
            }}
          >
            OUR STORY
          </h1>
          <p
            style={{
              fontFamily: 'Montserrat, Poppins, sans-serif',
              fontWeight: 300,
              lineHeight: '1.6em',
              fontSize: '16px',
              color: 'rgb(87, 87, 87)',
            }}
            className="text-left "
          >
            {biography}
          </p>
        </div>

        <div className="h-[400px]  mt-20">
          <img
            src={mainImage}
            alt="Artist with installation"
            className="w-full h-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-8 mb-12">
        <div className="h-[650px] order-2 md:order-1 mb-2 mt-20">
          <img
            src={secondaryImage}
            alt="Art installation"
            className="w-full h-full rounded-lg shadow-lg object-cover"
          />
        </div>

        <div className="flex flex-col justify-center order-1 md:order-1">
          <h1
            className="text-left"
            style={{
              fontFamily: 'Montserrat',
              fontWeight: 200,
              lineHeight: '1.5em',
              fontSize: '2em',
              letterSpacing: '.06em',
            }}
          >
            ARTIST'S STORY
          </h1>
          <p
            style={{
              fontFamily: 'Montserrat, Poppins, sans-serif',
              fontWeight: 300,
              lineHeight: '1.6em',
              fontSize: '16px',
              color: 'rgb(87, 87, 87)',
            }}
            className="text-left "
          >
            {artistStory}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Biography;
