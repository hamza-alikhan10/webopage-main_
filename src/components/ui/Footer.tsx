import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      icon: FaWhatsapp,
      href: "https://wa.me/+91 9650020485",
      label: "WhatsApp",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/formforge/",
      label: "Instagram",
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/formforge/",
      label: "Facebook",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/company/formforge/",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-transparent py-8">
      <style>
        {`
          .footer-container {
            margin-top: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 25px;
          }

          .footer-icon {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 20px; /* Background width */
            height: 20px; /* Background height */
            background-color: black; /* Black background */
            border-radius: 10px; /* Rounded corners */
            color: white; /* Icon color */
            font-size: 1.8rem; /* Icon size */
            transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;
            cursor: pointer;
          }

          .footer-icon:hover {
            transform: scale(1.1); /* Scale on hover */
            background-color:rgb(86, 84, 81); /* Gold background on hover */
            color: white; /* Keep icon color white on hover */
          }

          @media (min-width: 480px) {
            .footer-icon {
              width: 70px; /* Larger background for medium screens */
              height: 70px;
              font-size: 2rem; /* Larger icon size */
            }
          }

          @media (min-width: 768px) {
            .footer-icon {
              width: 80px; /* Larger background for larger screens */
              height: 80px;
              font-size: 2.2rem;
            }

            .footer-container {
              gap: 30px; /* Increase spacing on larger screens */
            }
          }
        `}
      </style>

      <div className="footer-container">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="footer-icon"
          >
            <Icon />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
