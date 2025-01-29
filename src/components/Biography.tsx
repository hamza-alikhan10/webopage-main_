import React from 'react';
import Footer from './ui/Footer';
import Navbar from './Navbar';
import '../App.css';

interface BiographyProps {
  mainImage: string;
  secondaryImage: string;
  biography: string;
  artistStory: string;
  thirdImage: string;
  thirdStory: string; // Studio Statement
  fourthImage: string;
  fourthStory: string;
}

const Biography: React.FC<BiographyProps> = ({
  mainImage,
  secondaryImage,
  biography,
  artistStory,
  thirdImage,
  thirdStory,
  fourthImage,
  fourthStory,
}) => {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-12" id="Root-padding">
      <Navbar />

      {/* Main Biography Section */}
      <h1
        className=" fade-in text-left"
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="fade-in">
          <p
            style={{
              fontFamily: 'Montserrat, Poppins, sans-serif',
              fontWeight: 300,
              lineHeight: '1.6em',
              fontSize: '16px',
             
              color: 'rgb(87, 87, 87)',
            }}
            className="text-left"
          >
            {biography}
          </p>
        </div>

        <div className="fade-in h-[500px]">
          <img
            src={mainImage}
            alt="Artist with installation"
            className="w-full h-full rounded-lg shadow-lg object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Artist's Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="fade-in h-[400px] order-2 md:order-1">
          <img
            src={secondaryImage}
            alt="Art installation"
            className="w-full h-full rounded-lg shadow-lg object-cover"
            loading="lazy"
          />
        </div>

        <div className="fade-in order-1 md:order-2">
          <h1
            className=" text-left"
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
            className="text-left"
          >
            {artistStory}
          </p>
        </div>
      </div>

      {/* Studio Statement Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="fade-in">
          <h1
            className=" text-left"
            style={{
              fontFamily: 'Montserrat',
              fontWeight: 200,
              lineHeight: '1.5em',
              fontSize: '2em',
              letterSpacing: '.06em',
            }}
          >
            STUDIO STATEMENT
          </h1>

          <p
            style={{
              fontFamily: 'Montserrat, Poppins, sans-serif',
              fontWeight: 300,
              lineHeight: '1.6em',
              fontSize: '16px',
              marginBottom: '0.5em',
              color: 'rgb(87, 87, 87)',
            }}
            className="text-left"
          >
            {thirdStory}
          </p>
        </div>

        <div className="fade-in h-[400px]">
          <img
            src={thirdImage}
            alt="Third art piece"
            className="w-full h-full rounded-lg shadow-lg object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Our Presence Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="fade-in h-[400px] order-2 md:order-1">
          <img
            src={fourthImage}
            alt="Fourth art piece"
            className="w-full h-full rounded-lg shadow-lg object-cover"
            loading="lazy"
          />
        </div>

        <div className="fade-in order-1 md:order-2">
          <h1
            className=" text-left"
            style={{
              fontFamily: 'Montserrat',
              fontWeight: 200,
              lineHeight: '1.5em',
              fontSize: '2em',
              letterSpacing: '.06em',
            }}
          >
            OUR PRESENCE
          </h1>

          <p
            style={{
              fontFamily: 'Montserrat, Poppins, sans-serif',
              fontWeight: 300,
              lineHeight: '1.6em',
              fontSize: '16px',
              marginBottom: '0.5em',
              color: 'rgb(87, 87, 87)',
            }}
            className="text-left"
          >
            {fourthStory}
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Biography;
