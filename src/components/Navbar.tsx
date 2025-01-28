import { useNavigate } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const navigate = useNavigate();

  const navLinks = [
    { name: "GALLERY", href: "/portfolio" },
    { name: "ABOUT", href: "/biography" },
    { name: "PRESS", href: "/Press" },
    { name: "CONTACT", href: "/contact" },
  ];

  const handleNavigation = (href) => {
    if (href.startsWith("/")) {
      navigate(href);
    } else {
      window.location.href = href;
    }
  };

  return (
    <div>
      <nav className="bg-transparent py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          {/* Logo */}
          <a
            href="/"
            className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light uppercase"
            style={{
              fontFamily: '"Poppins", "Montserrat"',
              textDecorationLine: "none",
              letterSpacing: "0.2em",
              lineHeight: "1.2",
            }}
          >
            FORMFORGE
          </a>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-4 mb-8 sm:mb-11">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.href)}
                className="nav-link text-gray-500 hover:text-black text-base sm:text-lg md:text-xl tracking-wide transition-colors duration-300"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>

        <style>{`
          .nav-link {
            transition: color 0.3s ease;
          }
          .nav-link:hover {
            color: black;
          }

          @media (max-width: 640px) {
            .text-4xl {
              font-size: 2rem; /* Smaller logo for mobile */
            }
            .nav-link {
              font-size: 0.875rem; /* Smaller text for mobile */
            }
          }
        `}</style>
      </nav>
    </div>
  );
};

export default Navbar;