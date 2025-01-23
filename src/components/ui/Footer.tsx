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
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px; /* Spacing between icons */
            padding: 0 1rem; /* Add horizontal padding for small screens */
          }

          .footer-icon {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 60px;
            height: 60px;
            background-color: black; /* Black background */
            border-radius: 50%; /* Fully rounded icons */
            color: white; /* Icon color */
            font-size: 1.6rem; /* Default icon size */
            transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;
            cursor: pointer;
          }

          .footer-icon:hover {
            transform: scale(1.1); /* Slight zoom on hover */
            background-color: rgb(86, 84, 81); /* Change background color on hover */
            color: white; /* Keep icon color white on hover */
          }

          @media (min-width: 480px) {
            .footer-icon {
              width: 70px; /* Increase size on medium devices */
              height: 70px;
              font-size: 2rem;
            }
          }

          @media (min-width: 768px) {
            .footer-icon {
              width: 80px; /* Larger icons for larger devices */
              height: 80px;
              font-size: 2.2rem;
            }

            
          

          @media (min-width: 1024px) {
            .footer-icon {
              width: 80px; /* Even larger icons for desktops */
              height: 80px;
              font-size: 2.5rem;
              margin-top:30px;
            }

            .footer-container {
              gap: 40px; /* Increase spacing further on desktops */
              margin-top:30px;
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
