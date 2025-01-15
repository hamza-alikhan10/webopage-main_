import React from 'react';
import Footer from '../components/ui/Footer';
import Navbar from '../components/Navbar';
import BiographyPage from '@/pages/BiographyPage';

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
  const splitTextIntoSentences = (text: string) =>
    text.split('. ').map((sentence) => sentence.trim() + (sentence.endsWith('.') ? '' : '.'));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Navbar />
      {/* Main Biography Section */}
      <h1
        className="mb-8 fade-in text-left"
        style={{
          fontFamily: 'Montserrat',
          fontWeight: 200,
          fontStyle: 'normal',
          lineHeight: '1.5em',
          fontSize: '2em',
          textTransform: 'none',
          textDecoration: 'none',
          letterSpacing: '.06em',
        }}
      >
        OUR STORY
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
  <div className="fade-in">
          <BiographyPage/>
        </div>

        <div className="fade-in h-[500px]">
          <img
            src={mainImage}
            alt="Artist with installation"
            className="w-full h-full rounded-lg shadow-lg"
            style={{
              display: 'block',
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              objectPosition: '50% 50%',
            }}
            loading="lazy"
          />
        </div>
      </div>

      {/* Secondary Image and Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="fade-in h-[400px] order-2 md:order-1">
          <img
            src={secondaryImage}
            alt="Art installation"
            className="w-full h-full rounded-lg shadow-lg"
            style={{
              display: 'block',
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              objectPosition: '50% 50%',
            }}
            loading="lazy"
          />
        </div>

        <div className="fade-in order-1 md:order-2">
          <h1
            className="mb-8 text-left"
            style={{
              fontFamily: 'Montserrat',
              fontWeight: 200,
              fontStyle: 'normal',
              lineHeight: '1.5em',
              fontSize: '2em',
              textTransform: 'none',
              textDecoration: 'none',
              letterSpacing: '.06em',
            }}
          >
            ARTIST'S STORY
          </h1>

          {splitTextIntoSentences(artistStory).map((sentence, index) => (
            <p
              key={index}
              style={{
                fontFamily: 'Montserrat, Poppins, sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                lineHeight: '1.8em',
                fontSize: '16px',
                textTransform: 'none',
                textDecoration: 'none',
                margin: '0 0 1em',
                color: 'rgb(87, 87, 87)',
              }}
              className="text-left"
            >
              {sentence}
            </p>
          ))}
        </div>
      </div>

      {/* Studio Statement Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="fade-in">
          <h1
            className="mb-8 text-left"
            style={{
              fontFamily: 'Montserrat',
              fontWeight: 200,
              fontStyle: 'normal',
              lineHeight: '1.5em',
              fontSize: '2em',
              textTransform: 'none',
              textDecoration: 'none',
              letterSpacing: '.06em',
            }}
          >
            STUDIO STATEMENT
          </h1>

          {splitTextIntoSentences(thirdStory).map((sentence, index) => (
            <p
              key={index}
              style={{
                fontFamily: 'Montserrat, Poppins, sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                lineHeight: '1.8em',
                fontSize: '16px',
                textTransform: 'none',
                textDecoration: 'none',
                margin: '0 0 1em',
                color: 'rgb(87, 87, 87)',
              }}
              className="text-left"
            >
              {sentence}
            </p>
          ))}
        </div>

        <div className="fade-in h-[400px]">
          <img
            src={thirdImage}
            alt="Third art piece"
            className="w-full h-full rounded-lg shadow-lg"
            style={{
              display: 'block',
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              objectPosition: '50% 50%',
            }}
            loading="lazy"
          />
        </div>
      </div>

      {/* Fourth Image and Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="fade-in h-[400px] order-2 md:order-1">
          <img
            src={fourthImage}
            alt="Fourth art piece"
            className="w-full h-full rounded-lg shadow-lg"
            style={{
              display: 'block',
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              objectPosition: '50% 50%',
            }}
            loading="lazy"
          />
        </div>

        <div className="fade-in order-1 md:order-2">
          <h1
            className="mb-8 text-left"
            style={{
              fontFamily: 'Montserrat',
              fontWeight: 200,
              fontStyle: 'normal',
              lineHeight: '1.5em',
              fontSize: '2em',
              textTransform: 'none',
              textDecoration: 'none',
              letterSpacing: '.06em',
            }}
          >
            OUR PRESENCE
          </h1>

          {splitTextIntoSentences(fourthStory).map((sentence, index) => (
            <p
              key={index}
              style={{
                fontFamily: 'Montserrat, Poppins, sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                lineHeight: '1.8em',
                fontSize: '16px',
                textTransform: 'none',
                textDecoration: 'none',
                margin: '0 0 1em',
                color: 'rgb(87, 87, 87)',
              }}
              className="text-left"
            >
              {sentence}
            </p>
          ))}
        </div>
      </div>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Biography;
