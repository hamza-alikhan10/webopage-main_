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

  const handleNavigation = (href: string) => {
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
            className="text-center text-5xl font-light uppercase"
            style={{
              fontFamily: '"Poppins", "Montserrat"',
              textDecorationLine: "none",
              letterSpacing: "0.2em", // Adds spacing between letters
              lineHeight: "1.2",
            }}
          >
            FORMFORGE
          </a>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.href)}
                className="nav-link text-gray-500 hover:text-black text-lg tracking-wide transition-all duration-300"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>

        <style>{`
          .nav-link {
            transition: transform 0.3s ease, color 0.3s ease;
          }
          .nav-link:hover {
            transform: translateY(-3px);
            color: black;
          }

          /* Uniform font size and spacing adjustments */
          @media (max-width: 768px) {
            .text-4xl {
              font-size: 2.5rem; /* Scale down logo for small devices */
            }
          }
        `}</style>
      </nav>
    </div>
  );
};

export default Navbar;
