import { useState, useEffect } from "react";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const images = [
  "/don2.webp",
  "/VIGHNAHARTA.webp",
  "/NANDI.webp",
  "/Solemn-banner.webp",
  "/DIVE.webp",
  "/urban.png",
  "/BUDDHA.png",
  "/don3.webp",
  "/urban.png",
  "/don4.webp",
  "/About-Us.png",
  "/THE-GRAND-PIANO.png",
  "/LA-BELLA.png",
  "/SATYAMEV-JAYATE.png",
  "/Twin-Spirits.jpeg",
  "/oronoir.png",
  "/don1.webp",
  "/urban.png",
  "/About-Us.png",
];

const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden", position: "relative" }}>
      <style>
        {`
          body {
            margin: 0;
            font-family: "Montserrat","Poppins", sans-serif;
            background-color: #000;
            overflow: hidden;
          }

          /* Image Styling */
          .current-slide {
            animation: fadeIn 1s ease-in-out;
          }

          .inactive-slide {
            animation: fadeOut 1s ease-in-out;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(1.1);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes fadeOut {
            from {
              opacity: 1;
            }
            to {
              opacity: 0;
              transform: scale(1.1);
            }
          }

          /* Centered Content */
          .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            text-align: center;
            position: relative;
            z-index: 10;
            color: white;
            padding: 0 20px;
          }

          .heading {
           color: white;  
          font-size: 8vw; /* Scales dynamically with viewport width */
            font-weight: bold;
            line-height: 1.2;
            margin: 0;
            text-transform: uppercase;
          }

          /* Button */
          .button {
            margin-top: 5vh; /* Scales dynamically */
            border: 1.5px solid white;
            color: white;
            cursor: pointer;
            font-size: 1rem;
            letter-spacing: 5px;
            padding: 10px 30px;
            text-transform: uppercase;
            transition: all 0.3s ease;
            border-radius: 50px;
          }

          .button:hover {
            background-color: white;
            color: black;
            transform: scale(1.05);
            box-shadow: 0px 4px 15px rgba(255, 255, 255, 0.3);
          }

          /* Icons */
          .icon-container {
            margin-top: 8vh;
            display: flex;
            justify-content: center;
            gap: 20px;
          }

          .icon {
            color: white;
            font-size: 4vw; /* Dynamically scales with viewport width */
            transition: transform 0.3s ease, color 0.3s ease;
          }

          .icon:hover {
            transform: scale(1.2);
            color:rgb(38, 35, 32); /* Optional: Gold tone */
          }

          /* Responsive Design */
          @media (min-width: 768px) {
            .heading {
              font-size: 5rem; /* Fixed size for larger devices */
            }

            .button {
              font-size: 0.8rem;
              padding: 15px 40px;
            }

            .icon {
              font-size: 2rem; /* Fixed size for larger devices */
            }
          }
        `}
      </style>

      {/* Fullscreen image carousel */}
      {images.map((src, index) => (
        <div
          key={index}
          className={currentImage === index ? "current-slide" : "inactive-slide"}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
            opacity: currentImage === index ? 1 : 0,
          }}
        />
      ))}

      {/* Centered Content */}
      <div className="content">
        <h1 className="heading">F O R M F O R G E </h1>
        <button className="button" onClick={() => (window.location.href = "/portfolio")}>
          ENTER
        </button>

        {/* Social Media Icons */}
        <div className="icon-container">
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
