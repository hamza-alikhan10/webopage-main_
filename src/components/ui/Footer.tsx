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
            gap: 20px; /* Consistent spacing between icons */
            padding: 0 1rem;
          }

          .footer-icon {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px; /* Fixed size for all devices */
            height: 40px;
            background-color: black;
            border-radius: 20%;
            color: white;
            font-size: 1rem;
            transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;
            cursor: pointer;
          }

          .footer-icon:hover {
            transform: scale(1.1); /* Slight zoom effect */
            background-color: rgb(86, 84, 81);
            color: white;
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
