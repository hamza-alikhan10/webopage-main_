import { Instagram, Facebook, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { 
      icon: MessageCircle, 
      href: "https://wa.me/919876543210",
      label: "WhatsApp",
      className: "text-black hover:text-gray-900"
    },
    { icon: Instagram, href: "https://www.instagram.com/formforge/", label: "Instagram" },
    { icon: Facebook, href: "https://www.instagram.com/formforge/", label: "Facebook" },
    { icon: Linkedin, href: "https://www.instagram.com/formforge/", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-transparent py-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          {socialLinks.map(({ icon: Icon, href, label, className }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-black hover:text-gray-900 transition-colors duration-300 ${className || ''}`}
              aria-label={label}
            >
              <Icon className={`h-6 w-6 ${className ? '' : 'text-black'}`} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;