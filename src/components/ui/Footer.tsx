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
      <div className="flex justify-center items-center flex-wrap md:space-x-4 space-x-2 px-4">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex justify-center items-center w-10 h-10 bg-black rounded-[20%] text-white text-base transition ease-in-out duration-300 cursor-pointer hover:scale-110 hover:bg-[rgb(86,84,81)]"
          >
            <Icon />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
